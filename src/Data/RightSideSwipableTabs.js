import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
    };
}

export default function RightSideSwipableTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: "background.paper" }}>
            <hr className="m-0" />
            <AppBar position="static" style={{ background: "#01081E" }}>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Spot" {...a11yProps(0)} style={{ fontSize: "11px", width: '100%' }} />
                    <Tab label="Isolated Margin" {...a11yProps(1)} style={{ fontSize: "11px", width: '100%' }} />
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}><Tab label="Futures" {...a11yProps(1)} style={{ fontSize: "11px", width: '100%' }} /></Link>
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}><Tab label="Grid" {...a11yProps(1)} style={{ fontSize: "11px", width: '100%' }} /></Link>
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
                style={{ background: '#151C30', height: "500px" }}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className="row" style={{ marginTop: '-12px' }}>
                        <div className="col-6">
                            {/* <input type="text" placeholder="Limit" className="w-100 px-3" style={{background:"#272E40", border:'0', color:'white', height:"30px", borderRadius:'5px'}} /> */}
                            <FormControl variant="outlined" className="w-100">
                                <OutlinedInput style={{ height: "35px", fontSize: "15px", background: "#272E40", border: '0', color: 'white' }}
                                    id="outlined-adornment-weight" placeholder="Limit"
                                    endAdornment={<InputAdornment position="end"><span className="text-white">USDT</span></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight"
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="outlined" className="pt-1 w-100">
                                <OutlinedInput style={{ height: "35px", fontSize: "15px", background: "#272E40", border: '0', color: 'white' }}
                                    id="outlined-adornment-weight" placeholder="Amount"
                                    endAdornment={<InputAdornment position="end"><span className="text-white">BTC</span></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight"
                                    }}
                                />
                            </FormControl>
                            <div className="row px-2">
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>25%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>50%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>75%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>100%</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Available：</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>0 USDT</div>
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Volume:</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>0 USDT</div>
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Advanced: -</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>Settings</div>
                            </div>
                            <button type="button" class="btn btn-outline-info w-100 mt-1" style={{ fontSize: "12px" }}>Log In or Sign Up</button>
                        </div>
                        <div className="col-6">
                            {/* <input type="text" placeholder="Limit" className="w-100 px-3" style={{background:"#272E40", border:'0', color:'white', height:"30px", borderRadius:'5px'}} /> */}
                            <FormControl variant="outlined" className="w-100">
                                <OutlinedInput style={{ height: "35px", fontSize: "15px", background: "#272E40", border: '0', color: 'white' }}
                                    id="outlined-adornment-weight" placeholder="Limit"
                                    endAdornment={<InputAdornment position="end"><span className="text-white">USDT</span></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight"
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="outlined" className="pt-1 w-100">
                                <OutlinedInput style={{ height: "35px", fontSize: "15px", background: "#272E40", border: '0', color: 'white' }}
                                    id="outlined-adornment-weight" placeholder="Amount"
                                    endAdornment={<InputAdornment position="end"><span className="text-white">BTC</span></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight"
                                    }}
                                />
                            </FormControl><br />
                            <div className="row px-2">
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>25%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>50%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>75%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>100%</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Available：</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>0 USDT</div>
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Volume:</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>0 USDT</div>
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Advanced: -</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>Settings</div>
                            </div>
                            <button type="button" class="btn btn-outline-info w-100 mt-1" style={{ fontSize: "12px" }}>Log In or Sign Up</button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className="row" style={{ marginTop: '-12px' }}>
                        <div className="col-6">
                            {/* <input type="text" placeholder="Limit" className="w-100 px-3" style={{background:"#272E40", border:'0', color:'white', height:"30px", borderRadius:'5px'}} /> */}
                            <FormControl variant="outlined" className="w-100">
                                <OutlinedInput style={{ height: "35px", fontSize: "15px", background: "#272E40", border: '0', color: 'white' }}
                                    id="outlined-adornment-weight" placeholder="Limit"
                                    endAdornment={<InputAdornment position="end"><span className="text-white">USDT</span></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight"
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="outlined" className="pt-1 w-100">
                                <OutlinedInput style={{ height: "35px", fontSize: "15px", background: "#272E40", border: '0', color: 'white' }}
                                    id="outlined-adornment-weight" placeholder="Amount"
                                    endAdornment={<InputAdornment position="end"><span className="text-white">BTC</span></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight"
                                    }}
                                />
                            </FormControl>
                            <div className="row px-2">
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>25%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>50%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>75%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>100%</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Available：</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>0 USDT</div>
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Volume:</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>0 USDT</div>
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Advanced: -</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>Settings</div>
                            </div>
                            <button type="button" class="btn btn-outline-info w-100 mt-1" style={{ fontSize: "12px" }}>Log In or Sign Up</button>
                        </div>
                        <div className="col-6">
                            {/* <input type="text" placeholder="Limit" className="w-100 px-3" style={{background:"#272E40", border:'0', color:'white', height:"30px", borderRadius:'5px'}} /> */}
                            <FormControl variant="outlined" className="w-100">
                                <OutlinedInput style={{ height: "35px", fontSize: "15px", background: "#272E40", border: '0', color: 'white' }}
                                    id="outlined-adornment-weight" placeholder="Limit"
                                    endAdornment={<InputAdornment position="end"><span className="text-white">USDT</span></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight"
                                    }}
                                />
                            </FormControl>
                            <FormControl variant="outlined" className="pt-1 w-100">
                                <OutlinedInput style={{ height: "35px", fontSize: "15px", background: "#272E40", border: '0', color: 'white' }}
                                    id="outlined-adornment-weight" placeholder="Amount"
                                    endAdornment={<InputAdornment position="end"><span className="text-white">BTC</span></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        "aria-label": "weight"
                                    }}
                                />
                            </FormControl><br />
                            <div className="row px-2">
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>25%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>50%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>75%</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn p-1 mt-1" style={{ background: "#1E2538", color: 'white', fontSize: "12px" }}>100%</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Available：</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>0 USDT</div>
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Volume:</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>0 USDT</div>
                                <div className="col-6" style={{ fontSize: "10px", color: "white" }}>Advanced: -</div>
                                <div className="col-6" style={{ textAlign: "right", color: "white", fontSize: "10px" }}>Settings</div>
                            </div>
                            <button type="button" class="btn btn-outline-info w-100 mt-1" style={{ fontSize: "12px" }}>Log In or Sign Up</button>
                        </div>
                    </div>
                </TabPanel>
            </SwipeableViews>
        </Box >
    );
}
