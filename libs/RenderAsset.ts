const One = [
    -0.14358, 0.09045, 0.08033, 0.2062, 0.0019, 0.2062, -0.14358, 0.09045, -0.01265, 0.10563, 0.08033, 0.2062, -0.01265, 0.10563,
    0.08033, -0.24541, 0.08033, 0.2062, -0.14358, 0.09045, -0.02625, 0.09203, -0.01265, 0.10563, -0.01392, 0.07527, 0.08033,
    -0.24541, -0.01265, 0.10563, -0.14358, 0.09045, -0.04554, 0.07464, -0.02625, 0.09203, -0.09741, 0.03289, -0.04554, 0.07464,
    -0.14358, 0.09045, -0.01486, 0.04238, 0.08033, -0.24541, -0.01392, 0.07527, -0.01518, 0.01581, 0.08033, -0.24541, -0.01486,
    0.04238, -0.01518, -0.24541, 0.08033, -0.24541, -0.01518, 0.01581,
];

const Two = [
    -0.06483, 0.20335, 0.08065, 0.19639, 0.00443, 0.21252, -0.11543, 0.17963, 0.08065, 0.19639, -0.06483, 0.20335, -0.11543,
    0.17963, 0.12998, 0.15275, 0.08065, 0.19639, -0.15686, 0.14801, 0.12998, 0.15275, -0.11543, 0.17963, -0.15686, 0.14801,
    -0.00253, 0.13283, 0.12998, 0.15275, -0.00253, 0.13283, 0.14738, 0.09045, 0.12998, 0.15275, -0.105, 0.08665, -0.05313,
    0.12081, -0.15686, 0.14801, -0.05313, 0.12081, -0.00253, 0.13283, -0.15686, 0.14801, 0.03763, 0.11954, 0.14738, 0.09045,
    -0.00253, 0.13283, 0.0525, 0.07906, 0.14738, 0.09045, 0.03763, 0.11954, 0.0525, 0.07906, 0.13251, 0.02214, 0.14738, 0.09045,
    0.04301, 0.03763, 0.13251, 0.02214, 0.0525, 0.07906, 0.01265, -0.00538, 0.13251, 0.02214, 0.04301, 0.03763, 0.01265, -0.00538,
    0.0895, -0.03922, 0.13251, 0.02214, -0.04238, -0.06452, 0.0895, -0.03922, 0.01265, -0.00538, -0.04238, -0.06452, 0.02151,
    -0.10626, 0.0895, -0.03922, -0.1556, -0.179, 0.02151, -0.10626, -0.04238, -0.06452, -0.1556, -0.179, -0.03669, -0.16066,
    0.02151, -0.10626, -0.1556, -0.179, -0.03669, -0.16509, -0.03669, -0.16066, -0.1556, -0.179, 0.16003, -0.16509, -0.03669,
    -0.16509, -0.1556, -0.179, 0.16003, -0.24541, 0.16003, -0.16509, -0.1556, -0.24541, 0.16003, -0.24541, -0.1556, -0.179,
];

const Three = [
    -0.09393, 0.19987, 0.10152, 0.18438, -0.00886, 0.21252, -0.15623, 0.16825, 0.10152, 0.18438, -0.09393, 0.19987, -0.15623,
    0.16825, 0.14231, 0.105, 0.10152, 0.18438, -0.11195, 0.10247, -0.08697, 0.11701, -0.15623, 0.16825, -0.08697, 0.11701,
    -0.05503, 0.12998, -0.15623, 0.16825, -0.05503, 0.12998, -0.01581, 0.13536, -0.15623, 0.16825, -0.01581, 0.13536, 0.14231,
    0.105, -0.15623, 0.16825, 0.03384, 0.12176, 0.14231, 0.105, -0.01581, 0.13536, 0.0487, 0.08412, 0.14231, 0.105, 0.03384,
    0.12176, 0.0487, 0.08412, 0.12935, 0.05123, 0.14231, 0.105, 0.0408, 0.05281, 0.12935, 0.05123, 0.0487, 0.08412, 0.01107,
    0.03131, 0.12935, 0.05123, 0.0408, 0.05281, 0.01107, 0.03131, 0.09456, 0.01392, 0.12935, 0.05123, -0.0525, 0.0234, 0.09456,
    0.01392, 0.01107, 0.03131, -0.08729, -0.04997, -0.0525, 0.0234, -0.08729, 0.0234, -0.08729, -0.04997, 0.09456, 0.01392,
    -0.0525, 0.0234, -0.08729, -0.04997, 0.04491, -0.00759, 0.09456, 0.01392, -0.08729, -0.04997, 0.04491, -0.00949, 0.04491,
    -0.00759, -0.08729, -0.04997, 0.12745, -0.04238, 0.04491, -0.00949, -0.08729, -0.04997, -0.05313, -0.04997, 0.12745, -0.04238,
    -0.05313, -0.04997, 0.01297, -0.05661, 0.12745, -0.04238, 0.01297, -0.05661, 0.1556, -0.11385, 0.12745, -0.04238, 0.04617,
    -0.07622, 0.1556, -0.11385, 0.01297, -0.05661, 0.05566, -0.10816, 0.1556, -0.11385, 0.04617, -0.07622, 0.0351, -0.15813,
    0.1556, -0.11385, 0.05566, -0.10816, 0.0351, -0.15813, 0.13631, -0.18438, 0.1556, -0.11385, -0.15686, -0.22707, -0.09583,
    -0.16825, -0.15686, -0.14611, -0.03669, -0.17584, 0.13631, -0.18438, 0.0351, -0.15813, -0.15686, -0.22707, -0.03669, -0.17584,
    -0.09583, -0.16825, -0.15686, -0.22707, 0.13631, -0.18438, -0.03669, -0.17584, -0.15686, -0.22707, 0.07685, -0.23371, 0.13631,
    -0.18438, -0.09614, -0.24541, 0.07685, -0.23371, -0.15686, -0.22707, -0.09614, -0.24541, -0.02657, -0.25174, 0.07685,
    -0.23371,
];

const Four = [
    -0.17015, -0.08539, 0.11575, 0.2062, 0.02783, 0.2062, -0.17015, -0.08539, 0.02404, 0.09677, 0.11575, 0.2062, 0.02404, 0.09677,
    0.02657, 0.09677, 0.11575, 0.2062, 0.02657, 0.09677, 0.11575, -0.0778, 0.11575, 0.2062, -0.17015, -0.08539, 0.01202, 0.07211,
    0.02404, 0.09677, 0.0253, 0.08065, 0.11575, -0.0778, 0.02657, 0.09677, 0.02404, 0.05408, 0.11575, -0.0778, 0.0253, 0.08065,
    -0.17015, -0.08539, -0.00316, 0.04744, 0.01202, 0.07211, 0.02309, 0.02435, 0.11575, -0.0778, 0.02404, 0.05408, -0.17015,
    -0.08539, -0.08602, -0.0778, -0.00316, 0.04744, 0.02277, -0.00127, 0.11575, -0.0778, 0.02309, 0.02435, 0.02277, -0.0778,
    0.11575, -0.0778, 0.02277, -0.00127, -0.17015, -0.08539, 0.02277, -0.0778, -0.08602, -0.0778, -0.17015, -0.08539, 0.11575,
    -0.0778, 0.02277, -0.0778, -0.17015, -0.08539, 0.17015, -0.0778, 0.11575, -0.0778, -0.17015, -0.08539, 0.17015, -0.1518,
    0.17015, -0.0778, -0.17015, -0.1518, 0.17015, -0.1518, -0.17015, -0.08539, 0.02277, -0.1518, 0.17015, -0.1518, -0.17015,
    -0.1518, 0.02277, -0.24541, 0.11575, -0.1518, 0.02277, -0.1518, 0.11575, -0.1518, 0.17015, -0.1518, 0.02277, -0.1518, 0.02277,
    -0.24541, 0.11575, -0.24541, 0.11575, -0.1518,
];

const Five = [
    -0.14105, -0.02404, -0.04048, 0.12524, -0.12397, 0.2062, -0.04048, 0.12524, 0.12081, 0.2062, -0.12397, 0.2062, -0.04048,
    0.12524, 0.12081, 0.12524, 0.12081, 0.2062, -0.14105, -0.02404, -0.0487, 0.03669, -0.04048, 0.12524, -0.02562, 0.0408,
    0.08223, 0.0272, 0.00886, 0.04301, -0.0487, 0.03669, 0.08223, 0.0272, -0.02562, 0.0408, -0.14105, -0.02404, 0.08223, 0.0272,
    -0.0487, 0.03669, -0.14105, -0.02404, 0.13314, -0.01898, 0.08223, 0.0272, -0.14105, -0.02404, -0.03479, -0.03416, 0.13314,
    -0.01898, -0.03479, -0.03416, 0.03352, -0.05155, 0.13314, -0.01898, 0.03352, -0.05155, 0.1518, -0.09424, 0.13314, -0.01898,
    -0.1031, -0.04428, -0.07147, -0.03763, -0.14105, -0.02404, -0.07147, -0.03763, -0.03479, -0.03416, -0.14105, -0.02404,
    0.05566, -0.10247, 0.1518, -0.09424, 0.03352, -0.05155, 0.05566, -0.10247, 0.13156, -0.17837, 0.1518, -0.09424, 0.04554,
    -0.14295, 0.13156, -0.17837, 0.05566, -0.10247, 0.01613, -0.16635, 0.13156, -0.17837, 0.04554, -0.14295, -0.14991, -0.22707,
    -0.09361, -0.1654, -0.14991, -0.14485, -0.14991, -0.22707, -0.03163, -0.17394, -0.09361, -0.1654, -0.03163, -0.17394, 0.13156,
    -0.17837, 0.01613, -0.16635, -0.14991, -0.22707, 0.13156, -0.17837, -0.03163, -0.17394, -0.14991, -0.22707, 0.07116, -0.23276,
    0.13156, -0.17837, -0.09519, -0.24541, 0.07116, -0.23276, -0.14991, -0.22707, -0.09519, -0.24541, -0.02846, -0.25174, 0.07116,
    -0.23276,
];

const Six = [
    -0.02815, 0.19639, 0.09867, 0.21031, 0.06768, 0.21126, -0.02815, 0.19639, 0.1284, 0.20683, 0.09867, 0.21031, -0.02815,
    0.19639, 0.1284, 0.1303, 0.1284, 0.20683, -0.0933, 0.15528, 0.10215, 0.13504, -0.02815, 0.19639, 0.10215, 0.13504, 0.1284,
    0.1303, -0.02815, 0.19639, -0.13314, 0.09519, 0.00411, 0.1265, -0.0933, 0.15528, 0.00411, 0.1265, 0.074, 0.13662, -0.0933,
    0.15528, 0.074, 0.13662, 0.10215, 0.13504, -0.0933, 0.15528, -0.13314, 0.09519, -0.03922, 0.09741, 0.00411, 0.1265, -0.13314,
    0.09519, -0.0623, 0.05281, -0.03922, 0.09741, -0.15307, 0.0234, -0.0623, 0.05281, -0.13314, 0.09519, -0.15307, 0.0234,
    -0.07084, -0.00443, -0.0623, 0.05281, -0.01328, 0.04111, 0.09962, 0.03131, 0.03099, 0.04807, -0.04522, 0.02245, 0.09962,
    0.03131, -0.01328, 0.04111, -0.04522, 0.02245, 0.14421, -0.01739, 0.09962, 0.03131, -0.15876, -0.05376, -0.07084, -0.00443,
    -0.15307, 0.0234, -0.06705, -0.00443, 0.14421, -0.01739, -0.04522, 0.02245, -0.15876, -0.05376, -0.06705, -0.00443, -0.07084,
    -0.00443, -0.15876, -0.05376, 0.00633, -0.0253, -0.06705, -0.00443, 0.00633, -0.0253, 0.14421, -0.01739, -0.06705, -0.00443,
    0.00633, -0.0253, 0.0525, -0.04428, 0.14421, -0.01739, 0.0525, -0.04428, 0.16003, -0.09488, 0.14421, -0.01739, -0.15876,
    -0.05376, -0.03036, -0.03447, 0.00633, -0.0253, -0.15876, -0.05376, -0.05503, -0.05819, -0.03036, -0.03447, 0.06768, -0.09614,
    0.16003, -0.09488, 0.0525, -0.04428, -0.14611, -0.14168, -0.05503, -0.05819, -0.15876, -0.05376, -0.14611, -0.14168, -0.06388,
    -0.08792, -0.05503, -0.05819, -0.14611, -0.14168, -0.05946, -0.11923, -0.06388, -0.08792, 0.06768, -0.09614, 0.14137, -0.179,
    0.16003, -0.09488, 0.04997, -0.15591, 0.14137, -0.179, 0.06768, -0.09614, -0.14611, -0.14168, -0.04649, -0.14738, -0.05946,
    -0.11923, -0.11101, -0.20335, -0.04649, -0.14738, -0.14611, -0.14168, -0.11101, -0.20335, -0.0253, -0.16762, -0.04649,
    -0.14738, 0.00443, -0.17521, 0.14137, -0.179, 0.04997, -0.15591, -0.11101, -0.20335, 0.00443, -0.17521, -0.0253, -0.16762,
    -0.11101, -0.20335, 0.14137, -0.179, 0.00443, -0.17521, -0.11101, -0.20335, 0.08824, -0.23308, 0.14137, -0.179, -0.05851,
    -0.23972, 0.08824, -0.23308, -0.11101, -0.20335, -0.05851, -0.23972, 0.00633, -0.25174, 0.08824, -0.23308,
];

const Seven = [
    -0.16382, 0.12587, 0.16003, 0.2062, -0.16382, 0.2062, -0.16382, 0.12587, 0.16003, 0.14611, 0.16003, 0.2062, -0.16382, 0.12587,
    0.05882, 0.12587, 0.16003, 0.14611, 0.05882, 0.12587, -0.01075, -0.24541, 0.16003, 0.14611, -0.11069, -0.24541, -0.01075,
    -0.24541, 0.05882, 0.12587,
];

const Eight = [
    -0.07116, 0.19987, 0.07179, 0.19987, 0.0, 0.21189, -0.1246, 0.16382, 0.07179, 0.19987, -0.07116, 0.19987, -0.1246, 0.16382,
    0.12429, 0.16382, 0.07179, 0.19987, -0.14485, 0.10373, -0.00063, 0.14231, -0.1246, 0.16382, -0.00063, 0.14231, 0.12429,
    0.16382, -0.1246, 0.16382, -0.00063, 0.14231, 0.14421, 0.1031, 0.12429, 0.16382, -0.14485, 0.10373, -0.03953, 0.1303,
    -0.00063, 0.14231, 0.0389, 0.1303, 0.14421, 0.1031, -0.00063, 0.14231, -0.14485, 0.10373, -0.05503, 0.09614, -0.03953, 0.1303,
    0.0544, 0.09614, 0.14421, 0.1031, 0.0389, 0.1303, -0.13504, 0.05598, -0.05503, 0.09614, -0.14485, 0.10373, 0.0544, 0.09614,
    0.13346, 0.05534, 0.14421, 0.1031, -0.13504, 0.05598, -0.04744, 0.06926, -0.05503, 0.09614, 0.04681, 0.06799, 0.13346,
    0.05534, 0.0544, 0.09614, -0.13504, 0.05598, -0.0272, 0.04902, -0.04744, 0.06926, 0.02688, 0.04807, 0.13346, 0.05534, 0.04681,
    0.06799, -0.10879, 0.01929, -0.0272, 0.04902, -0.13504, 0.05598, 0.02688, 0.04807, 0.10468, 0.01961, 0.13346, 0.05534,
    -0.10879, 0.01929, 0.0, 0.03289, -0.0272, 0.04902, 0.0, 0.03289, 0.10468, 0.01961, 0.02688, 0.04807, -0.10879, 0.01929,
    0.10468, 0.01961, 0.0, 0.03289, -0.10879, 0.01929, 0.06325, -0.00696, 0.10468, 0.01961, -0.07211, -0.00949, 0.06325, -0.00696,
    -0.10879, 0.01929, -0.07211, -0.00949, 0.10911, -0.03637, 0.06325, -0.00696, -0.11575, -0.03763, 0.10911, -0.03637, -0.07211,
    -0.00949, -0.11575, -0.03763, -0.00443, -0.0487, 0.10911, -0.03637, -0.00443, -0.0487, 0.14453, -0.07559, 0.10911, -0.03637,
    -0.14706, -0.07717, -0.00443, -0.0487, -0.11575, -0.03763, -0.14706, -0.07717, -0.0389, -0.06894, -0.00443, -0.0487, 0.0038,
    -0.05313, 0.14453, -0.07559, -0.00443, -0.0487, 0.03447, -0.07242, 0.14453, -0.07559, 0.0038, -0.05313, -0.14706, -0.07717,
    -0.06199, -0.09393, -0.0389, -0.06894, 0.05946, -0.09583, 0.14453, -0.07559, 0.03447, -0.07242, 0.05946, -0.09583, 0.15813,
    -0.1284, 0.14453, -0.07559, -0.15876, -0.13093, -0.06199, -0.09393, -0.14706, -0.07717, -0.15876, -0.13093, -0.07021,
    -0.12524, -0.06199, -0.09393, 0.06958, -0.12587, 0.15813, -0.1284, 0.05946, -0.09583, -0.15876, -0.13093, -0.05281, -0.16572,
    -0.07021, -0.12524, 0.05187, -0.16635, 0.15813, -0.1284, 0.06958, -0.12587, 0.05187, -0.16635, 0.1382, -0.19355, 0.15813,
    -0.1284, -0.1401, -0.19545, -0.05281, -0.16572, -0.15876, -0.13093, -0.1401, -0.19545, -0.00127, -0.18153, -0.05281, -0.16572,
    -0.00127, -0.18153, 0.1382, -0.19355, 0.05187, -0.16635, -0.1401, -0.19545, 0.1382, -0.19355, -0.00127, -0.18153, -0.1401,
    -0.19545, 0.08254, -0.23656, 0.1382, -0.19355, -0.08602, -0.23719, 0.08254, -0.23656, -0.1401, -0.19545, -0.08602, -0.23719,
    0.0, -0.25174, 0.08254, -0.23656,
];

const Nine = [
    -0.08855, 0.1926, 0.05787, 0.19924, -0.00696, 0.21126, -0.08855, 0.1926, 0.11037, 0.16287, 0.05787, 0.19924, -0.142, 0.13884,
    0.11037, 0.16287, -0.08855, 0.1926, -0.142, 0.13884, -0.00506, 0.13472, 0.11037, 0.16287, -0.00506, 0.13472, 0.14548, 0.1012,
    0.11037, 0.16287, -0.16066, 0.0544, -0.0506, 0.11575, -0.142, 0.13884, -0.0506, 0.11575, -0.00506, 0.13472, -0.142, 0.13884,
    0.02467, 0.12713, 0.14548, 0.1012, -0.00506, 0.13472, 0.04586, 0.10689, 0.14548, 0.1012, 0.02467, 0.12713, -0.16066, 0.0544,
    -0.06831, 0.05566, -0.0506, 0.11575, 0.05882, 0.07875, 0.14548, 0.1012, 0.04586, 0.10689, 0.05882, 0.07875, 0.15813, 0.01328,
    0.14548, 0.1012, 0.06325, 0.04744, 0.15813, 0.01328, 0.05882, 0.07875, -0.16066, 0.0544, -0.05313, 0.0038, -0.06831, 0.05566,
    -0.14485, -0.02309, -0.05313, 0.0038, -0.16066, 0.0544, 0.0544, 0.01803, 0.15813, 0.01328, 0.06325, 0.04744, 0.03004,
    -0.00569, 0.15813, 0.01328, 0.0544, 0.01803, 0.03004, -0.00569, 0.15244, -0.06357, 0.15813, 0.01328, -0.14485, -0.02309,
    -0.00696, -0.01518, -0.05313, 0.0038, -0.00696, -0.01518, 0.07021, -0.03605, 0.03004, -0.00569, 0.07021, -0.03605, 0.15244,
    -0.06357, 0.03004, -0.00569, -0.14485, -0.02309, 0.07021, -0.03605, -0.00696, -0.01518, -0.10057, -0.07179, 0.06641, -0.03605,
    -0.14485, -0.02309, 0.06641, -0.03605, 0.07021, -0.03605, -0.14485, -0.02309, -0.10057, -0.07179, 0.04522, -0.06262, 0.06641,
    -0.03605, 0.06167, -0.09298, 0.15244, -0.06357, 0.07021, -0.03605, -0.10057, -0.07179, 0.01423, -0.08159, 0.04522, -0.06262,
    0.06167, -0.09298, 0.13251, -0.13567, 0.15244, -0.06357, -0.03352, -0.08855, 0.01423, -0.08159, -0.10057, -0.07179, 0.03858,
    -0.13789, 0.13251, -0.13567, 0.06167, -0.09298, 0.03858, -0.13789, 0.09266, -0.19576, 0.13251, -0.13567, -0.00474, -0.16698,
    0.09266, -0.19576, 0.03858, -0.13789, -0.07464, -0.1771, 0.09266, -0.19576, -0.00474, -0.16698, -0.12903, -0.24731, -0.10247,
    -0.17521, -0.12903, -0.17078, -0.12903, -0.24731, -0.07464, -0.1771, -0.10247, -0.17521, -0.12903, -0.24731, 0.09266,
    -0.19576, -0.07464, -0.1771, -0.12903, -0.24731, 0.02751, -0.23688, 0.09266, -0.19576, -0.12903, -0.24731, -0.06831, -0.25174,
    0.02751, -0.23688, -0.0993, -0.25079, -0.06831, -0.25174, -0.12903, -0.24731,
];

export const Numbers = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
