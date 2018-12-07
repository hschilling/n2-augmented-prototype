var modelData = {"tree": {"name": "root", "type": "root", "subsystem_type": "group", "linear_solver": "LN: RUNONCE", "nonlinear_solver": "NL: RUNONCE", "children": [{"name": "ground", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "V", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "source", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "I", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "circuit", "type": "subsystem", "subsystem_type": "group", "linear_solver": "LN: Direct", "nonlinear_solver": "NL: Newton", "children": [{"name": "n1", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "I_in:0", "type": "param", "dtype": "ndarray"}, {"name": "I_out:0", "type": "param", "dtype": "ndarray"}, {"name": "I_out:1", "type": "param", "dtype": "ndarray"}, {"name": "V", "type": "unknown", "implicit": true, "dtype": "ndarray"}]}, {"name": "n2", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "I_in:0", "type": "param", "dtype": "ndarray"}, {"name": "I_out:0", "type": "param", "dtype": "ndarray"}, {"name": "V", "type": "unknown", "implicit": true, "dtype": "ndarray"}]}, {"name": "R1", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "V_in", "type": "param", "dtype": "ndarray"}, {"name": "V_out", "type": "param", "dtype": "ndarray"}, {"name": "I", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "R2", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "V_in", "type": "param", "dtype": "ndarray"}, {"name": "V_out", "type": "param", "dtype": "ndarray"}, {"name": "I", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "D1", "type": "subsystem", "subsystem_type": "component", "linear_solver": "", "nonlinear_solver": "", "children": [{"name": "V_in", "type": "param", "dtype": "ndarray"}, {"name": "V_out", "type": "param", "dtype": "ndarray"}, {"name": "I", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}]}]}, "connections_list": [{"src": "circuit.n2.V", "tgt": "circuit.D1.V_in", "cycle_arrows": ["circuit.D1 circuit.n2", "circuit.R2 circuit.n2", "circuit.n2 circuit.R2"]}, {"src": "ground.V", "tgt": "circuit.D1.V_out"}, {"src": "circuit.n1.V", "tgt": "circuit.R1.V_in", "cycle_arrows": ["circuit.R1 circuit.n1"]}, {"src": "ground.V", "tgt": "circuit.R1.V_out"}, {"src": "circuit.n1.V", "tgt": "circuit.R2.V_in", "cycle_arrows": ["circuit.R1 circuit.n1", "circuit.R2 circuit.n1", "circuit.R2 circuit.n2", "circuit.n1 circuit.R1", "circuit.n2 circuit.R2"]}, {"src": "circuit.n2.V", "tgt": "circuit.R2.V_out", "cycle_arrows": ["circuit.R2 circuit.n2"]}, {"src": "source.I", "tgt": "circuit.n1.I_in:0"}, {"src": "circuit.R1.I", "tgt": "circuit.n1.I_out:0", "cycle_arrows": ["circuit.n1 circuit.R1"]}, {"src": "circuit.R2.I", "tgt": "circuit.n1.I_out:1", "cycle_arrows": ["circuit.R1 circuit.n1", "circuit.R2 circuit.n2", "circuit.n1 circuit.R1", "circuit.n1 circuit.R2", "circuit.n2 circuit.R2"]}, {"src": "circuit.R2.I", "tgt": "circuit.n2.I_in:0", "cycle_arrows": ["circuit.n2 circuit.R2"]}, {"src": "circuit.D1.I", "tgt": "circuit.n2.I_out:0", "cycle_arrows": ["circuit.R2 circuit.n2", "circuit.n2 circuit.D1", "circuit.n2 circuit.R2"]}], "abs2prom": {"input": {"circuit.n1.I_in:0": "circuit.I_in", "circuit.n1.I_out:0": "circuit.n1.I_out:0", "circuit.n1.I_out:1": "circuit.n1.I_out:1", "circuit.n2.I_in:0": "circuit.n2.I_in:0", "circuit.n2.I_out:0": "circuit.n2.I_out:0", "circuit.R1.V_in": "circuit.R1.V_in", "circuit.R1.V_out": "circuit.Vg", "circuit.R2.V_in": "circuit.R2.V_in", "circuit.R2.V_out": "circuit.R2.V_out", "circuit.D1.V_in": "circuit.D1.V_in", "circuit.D1.V_out": "circuit.Vg"}, "output": {"ground.V": "ground.V", "source.I": "source.I", "circuit.n1.V": "circuit.n1.V", "circuit.n2.V": "circuit.n2.V", "circuit.R1.I": "circuit.R1.I", "circuit.R2.I": "circuit.R2.I", "circuit.D1.I": "circuit.D1.I"}}}