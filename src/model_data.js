var modelData = {"tree": {"name": "root", "type": "root", "subsystem_type":
"group", "linear_solver": "LN: SCIPY", "children": [{"name": "px", "type":
"subsystem", "subsystem_type": "component", "linear_solver": "", "children":
[{"name": "x", "type": "unknown", "implicit": false, "dtype": "ndarray"}]},
{"name": "pz", "type": "subsystem", "subsystem_type": "component", "linear_solver":
"", "children": [{"name": "z", "type": "unknown", "implicit": false, "dtype":
"ndarray"}]}, {"name": "sub", "type": "subsystem", "subsystem_type": "group",
"linear_solver": "LN: SCIPY", "children": [{"name": "state_eq_group", "type":
"subsystem", "subsystem_type": "group", "linear_solver": "LN: SCIPY", "children":
[{"name": "state_eq", "type": "subsystem", "subsystem_type": "component",
"linear_solver": "", "children": [{"name": "y2_actual", "type": "param", "dtype":
"ndarray"}, {"name": "y2_command", "type": "unknown", "implicit": true,
"dtype": "ndarray"}]}]}, {"name": "d1", "type": "subsystem", "subsystem_type":
"component", "linear_solver": "", "children": [{"name": "z", "type": "param",
"dtype": "ndarray"}, {"name": "x", "type": "param", "dtype": "ndarray"},
{"name": "y2", "type": "param", "dtype": "ndarray"}, {"name": "y1", "type":
"unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "d2", "type":
"subsystem", "subsystem_type": "component", "linear_solver": "", "children":
[{"name": "z", "type": "param", "dtype": "ndarray"}, {"name": "y1", "type":
"param", "dtype": "ndarray"}, {"name": "y2", "type": "unknown", "implicit":
false, "dtype": "ndarray"}]}]}, {"name": "obj_cmp", "type": "subsystem",
"subsystem_type": "component", "linear_solver": "", "children": [{"name": "x",
"type": "param", "dtype": "ndarray"}, {"name": "y1", "type": "param", "dtype":
"ndarray"}, {"name": "y2", "type": "param", "dtype": "ndarray"}, {"name": "z",
"type": "param", "dtype": "ndarray"}, {"name": "obj", "type": "unknown",
"implicit": false, "dtype": "ndarray"}]}, {"name": "con_cmp1", "type":
"subsystem", "subsystem_type": "component", "linear_solver": "", "children":
[{"name": "y1", "type": "param", "dtype": "ndarray"}, {"name": "con1", "type":
"unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "con_cmp2",
"type": "subsystem", "subsystem_type": "component", "linear_solver": "", "children":
[{"name": "y2", "type": "param", "dtype": "ndarray"}, {"name": "con2", "type":
"unknown", "implicit": false, "dtype": "ndarray"}]}]}, "connections_list":
[{"src": "sub.d1.y1", "tgt": "con_cmp1.y1"}, {"src": "sub.d2.y2", "tgt":
"con_cmp2.y2"}, {"src": "px.x", "tgt": "obj_cmp.x"}, {"src": "sub.d1.y1",
"tgt": "obj_cmp.y1"}, {"src": "sub.d2.y2", "tgt": "obj_cmp.y2"}, {"src":
"pz.z", "tgt": "obj_cmp.z"}, {"src": "px.x", "tgt": "sub.d1.x"}, {"src":
"sub.state_eq_group.state_eq.y2_command", "tgt": "sub.d1.y2"}, {"src": "pz.z",
"tgt": "sub.d1.z"}, {"src": "sub.d1.y1", "tgt": "sub.d2.y1"}, {"src": "pz.z",
"tgt": "sub.d2.z"}, {"src": "sub.d2.y2", "tgt":
"sub.state_eq_group.state_eq.y2_actual", "cycle_arrows": ["sub.d1 sub.d2",
"sub.state_eq_group.state_eq sub.d1"]}], "abs2prom": {"input":
{"sub.state_eq_group.state_eq.y2_actual": "state_eq.y2_actual", "sub.d1.z":
"z", "sub.d1.x": "x", "sub.d1.y2": "d1.y2", "sub.d2.z": "z", "sub.d2.y1":
"y1", "obj_cmp.x": "x", "obj_cmp.y1": "y1", "obj_cmp.y2": "obj_cmp.y2",
"obj_cmp.z": "z", "con_cmp1.y1": "y1", "con_cmp2.y2": "con_cmp2.y2"},
"output": {"px.x": "x", "pz.z": "z", "sub.state_eq_group.state_eq.y2_command":
"state_eq.y2_command", "sub.d1.y1": "y1", "sub.d2.y2": "d2.y2", "obj_cmp.obj":
"obj", "con_cmp1.con1": "con1", "con_cmp2.con2": "con2"}}}
