import { ExpoWebGLRenderingContext } from "expo-gl";
import { Numbers } from "./RenderAsset";

export type Color = {
    r: number;
    g: number;
    b: number;
};

export type Vertex = {
    x: number;
    y: number;
    color: Color;
};

export class GLRenderer {
    gl: ExpoWebGLRenderingContext;
    shader: WebGLProgram | null = null;
    vertexArray: WebGLVertexArrayObject | null = null;
    vertexBuffer: WebGLBuffer | null = null;

    vertices: Vertex[] = [];

    constructor(gl: ExpoWebGLRenderingContext) {
        this.gl = gl;

        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);

        this.vertexArray = this.gl.createVertexArray();
        if (!this.vertexArray) {
            console.log("Error creating vertex array");
            return;
        }

        this.initBuffers();
        this.initShader();
    }

    clear(color: Color) {
        this.vertices = [];
        this.gl.clearColor(color.r, color.g, color.b, 1);
    }

    addRectColour(x: number, y: number, width: number, height: number, color: Color) {
        const x1 = x;
        const x2 = x + width;
        const y1 = y;
        const y2 = y + height;

        this.vertices.push({ x: x1, y: y1, color });
        this.vertices.push({ x: x2, y: y1, color });
        this.vertices.push({ x: x1, y: y2, color });
        this.vertices.push({ x: x1, y: y2, color });
        this.vertices.push({ x: x2, y: y1, color });
        this.vertices.push({ x: x2, y: y2, color });
    }

    addNumberColour(x: number, y: number, size: number, number: number, color: Color) {
        const vertices = Numbers[number - 1];

        for (let i = 0; i < vertices.length; i += 2) {
            this.vertices.push({
                x: x + vertices[i] * size,
                y: y + vertices[i + 1] * size,
                color,
            });
        }
    }

    addLineColour(x1: number, y1: number, x2: number, y2: number, width: number, color: Color) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = dy / len;
        const ny = -dx / len;
        const w = width / 2;

        this.vertices.push({ x: x1 - w * nx, y: y1 - w * ny, color });
        this.vertices.push({ x: x1 + w * nx, y: y1 + w * ny, color });
        this.vertices.push({ x: x2 - w * nx, y: y2 - w * ny, color });
        this.vertices.push({ x: x2 - w * nx, y: y2 - w * ny, color });
        this.vertices.push({ x: x1 + w * nx, y: y1 + w * ny, color });
        this.vertices.push({ x: x2 + w * nx, y: y2 + w * ny, color });
    }

    render() {
        const glVertices = new Float32Array(this.vertices.flatMap((v) => [v.x, v.y, v.color.r, v.color.g, v.color.b]));

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, glVertices, this.gl.STATIC_DRAW);

        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        this.gl.bindVertexArray(this.vertexArray);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertices.length);

        this.gl.flush();
        this.gl.endFrameEXP();
    }

    getVertexShader() {
        const source = `
                attribute vec2 a_position;
                attribute vec3 a_color;

                varying vec3 v_color;

                void main(void) {
                    float x = a_position.x * 2.0 - 1.0;
                    float y = a_position.y * 2.0 - 1.0;
                    gl_Position = vec4(x, y, 0.0, 1.0);
                    v_color = a_color;
                }
            `;

        const vert = this.gl.createShader(this.gl.VERTEX_SHADER);
        if (!vert) {
            console.log("Error creating vertex shader");
            return null;
        }

        this.gl.shaderSource(vert, source);
        this.gl.compileShader(vert);
        if (!this.gl.getShaderParameter(vert, this.gl.COMPILE_STATUS)) {
            console.log("Error compiling vertex shader");
            console.log(this.gl.getShaderInfoLog(vert));
            return null;
        }

        return vert;
    }

    getFragmentShader() {
        const source = `
                precision mediump float;

                varying vec3 v_color;
                
                void main(void) {
                    gl_FragColor = vec4(v_color, 1.0);
                }
            `;

        const frag = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        if (!frag) {
            console.log("Error creating fragment shader");
            return null;
        }

        this.gl.shaderSource(frag, source);
        this.gl.compileShader(frag);
        if (!this.gl.getShaderParameter(frag, this.gl.COMPILE_STATUS)) {
            console.log("Error compiling fragment shader");
            console.log(this.gl.getShaderInfoLog(frag));
            return null;
        }

        return frag;
    }

    initShader() {
        const vert = this.getVertexShader() as WebGLShader;
        const frag = this.getFragmentShader() as WebGLShader;

        this.shader = this.gl.createProgram() as WebGLProgram;

        this.gl.attachShader(this.shader, vert);
        this.gl.attachShader(this.shader, frag);
        this.gl.linkProgram(this.shader);
        if (!this.gl.getProgramParameter(this.shader, this.gl.LINK_STATUS)) {
            console.log("Error linking shader program");
            console.log(this.gl.getProgramInfoLog(this.shader));
            return;
        }

        this.gl.useProgram(this.shader);
    }

    initBuffers() {
        this.vertexArray = this.gl.createVertexArray();
        this.gl.bindVertexArray(this.vertexArray);
        this.vertexBuffer = this.gl.createBuffer();
        if (!this.vertexBuffer) {
            console.log("Error creating vertex buffer");
            return;
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
        this.gl.enableVertexAttribArray(0);
        this.gl.enableVertexAttribArray(1);
        this.gl.vertexAttribPointer(0, 2, this.gl.FLOAT, false, 5 * 4, 0);
        this.gl.vertexAttribPointer(1, 3, this.gl.FLOAT, false, 5 * 4, 2 * 4);

        this.gl.bindVertexArray(null);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }
}
