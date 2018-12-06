var modelData = {"tree": {"name": "root", "type": "root", "subsystem_type": "group", "linear_solver": "LN: RUNONCE", "nonlinear_solver": "NL: NLBGS", "children": [{"name": "g1", "type": "subsystem", "subsystem_type": "group", "linear_solver": "LN: SCIPY", "nonlinear_solver": "NL: NLBGS", "children": [{"name": "d1", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "z", "type": "param", "dtype": "ndarray"}, {"name": "x", "type": "param", "dtype": "ndarray"}, {"name": "y2", "type": "param", "dtype": "ndarray"}, {"name": "y1", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "d2", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "z", "type": "param", "dtype": "ndarray"}, {"name": "y1", "type": "param", "dtype": "ndarray"}, {"name": "y2", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}]}, {"name": "g2", "type": "subsystem", "subsystem_type": "group", "linear_solver": "LN: SCIPY", "nonlinear_solver": "NL: NLBGS", "children": [{"name": "d1", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "z", "type": "param", "dtype": "ndarray"}, {"name": "x", "type": "param", "dtype": "ndarray"}, {"name": "y2", "type": "param", "dtype": "ndarray"}, {"name": "y1", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "d2", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "z", "type": "param", "dtype": "ndarray"}, {"name": "y1", "type": "param", "dtype": "ndarray"}, {"name": "y2", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}]}]}, "connections_list": [{"src": "g2.d2.y2", "tgt": "g1.d1.x", "cycle_arrows": ["g1.d1 g1.d2", "g1.d2 g1.d1", "g1.d2 g2.d1", "g2.d1 g2.d2", "g2.d2 g2.d1"]}, {"src": "g1.d2.y2", "tgt": "g1.d1.y2", "cycle_arrows": ["g1.d1 g1.d2"]}, {"src": "g1.d1.y1", "tgt": "g1.d2.y1", "cycle_arrows": ["g1.d2 g1.d1"]}, {"src": "g1.d2.y2", "tgt": "g2.d1.x"}, {"src": "g2.d2.y2", "tgt": "g2.d1.y2", "cycle_arrows": ["g2.d1 g2.d2"]}, {"src": "g2.d1.y1", "tgt": "g2.d2.y1", "cycle_arrows": ["g2.d2 g2.d1"]}], "abs2prom": {"input": {"g1.d1.z": "g1.z", "g1.d1.x": "g1.x", "g1.d1.y2": "g1.y2", "g1.d2.z": "g1.z", "g1.d2.y1": "g1.y1", "g2.d1.z": "g2.z", "g2.d1.x": "g2.x", "g2.d1.y2": "g2.y2", "g2.d2.z": "g2.z", "g2.d2.y1": "g2.y1"}, "output": {"g1.d1.y1": "g1.y1", "g1.d2.y2": "g1.y2", "g2.d1.y1": "g2.y1", "g2.d2.y2": "g2.y2"}}}