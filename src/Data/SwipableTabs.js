import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function SwipableTabs() {
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
            <AppBar position="static" style={{ background: "#01081E" }}>

                <div className="row">
                    <div className="col-7">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Open Orders" {...a11yProps(0)} style={{ fontSize: "11px", width: '100%' }} />
                            <Tab label="Advanced Orders" {...a11yProps(1)} style={{ fontSize: "11px", width: '100%' }} />
                            <Tab label="Order History" {...a11yProps(2)} style={{ fontSize: "11px", width: '100%' }} />
                            <Tab label="Trade History" {...a11yProps(3)} style={{ fontSize: "11px", width: '100%' }} />
                        </Tabs>
                    </div>
                    <div className="col-5">

                    </div>
                </div>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
                style={{ background: '#151C30', height: "500px" }}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className="row" style={{ marginTop: "-10px" }}>
                        <div className="col-6 row">
                            <div className="col-3" style={{ color: '#A1A295', fontSize: "14px" }}>
                                Time
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        All Pairs
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">All Pairs</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Current Pairs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        All Types
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">All Types</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Stop Market</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Stop Limit</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        Buy/Sells
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Buy/Sells</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Sell</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 row">
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Stop price
                            </div>
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Price
                            </div>
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Amount
                            </div>
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Cancel All <i className="fa fa-info-circle text-secondary" style={{ cursor: "pointer" }}></i>
                            </div>
                        </div>
                    </div>
                    <br />
                    <h6 className="text-center">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIxcHgiIGhlaWdodD0iNzZweCIgdmlld0JveD0iMCAwIDEyMSA3NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuMiAoNjcxNDUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmRlZmF1bHRkYXJrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iNjkuMzU2OTM1MSUiIHgyPSI0Ni42OTU5NDM3JSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkQyRjMxIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM2NDc1NCIgc3RvcC1vcGFjaXR5PSIwLjUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI5Mi41MTQ0OTg2JSIgeTE9IjIyLjU4MzQxOSUiIHgyPSIxMS42OTY4NjE2JSIgeTI9Ijc2LjcyMzAwMzQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MzQ4NTMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM2M0I0OCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZGVmYXVsdGRhcmsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjAwMDAwMCwgLTI2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTcuMDAwMDAwKSIgaWQ9ImRlZmF1bHQiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNzAiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7IiBwb2ludHM9IjI1LjI3MDE1NzYgNTIuNjM3OTg3NyA2MC42ODE3ODUgODQuNzE0NjEyNiAxMjUuMzQwNzI5IDczLjI0NDMwMjggODQuOTAwMDU5NiA0MS41NTUwNDMyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTg5LjM4MTM0NjEsMjcuMDM3NjI4MSBDOTIuMzAwNzQzMiwyOS45MDcxNjU4IDk0Ljc4OTM2MDIsMzIuNjg5NzA2OCA5Ni44NDcxOTcsMzUuMzg1MjUxMiBDMTAxLjEzMTA2Nyw0MC45OTY2NTk1IDEwMi4yMzY5NjYsNDcuOTM2MzQzMSAxMDEuOTM5MTAzLDQ4LjEzMjIzMTcgQzEwMC4zMTQwOTQsNDkuMjAwOTEzNyA5MS4xOTYzMDEsNDMuODUyNTUwNiA4OS4zODEzNDYxLDM4Ljg0NTQ2MTMgQzg4LjI5MzI3OTksMzUuODQzNzA5NCA4OC4yOTMyNzk5LDMxLjkwNzc2NSA4OS4zODEzNDYxLDI3LjAzNzYyODEgWiIgaWQ9IlBhdGgtMTIiIGZpbGw9IiM2NDY4NzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk1LjI3NDkzNiwgMzcuNjUzNzYzKSByb3RhdGUoMTUuMDAwMDAwKSB0cmFuc2xhdGUoLTk1LjI3NDkzNiwgLTM3LjY1Mzc2MykgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNzg2MTY3MjksNjUuNjQ2MzYzOCBDMjkuMTQxNjgwNiw1MS4wNzU2OTgzIDQwLjMzNzA1NjQsMzIuOTIyMjI1OCA0MS4zNzIyOTQ4LDExLjE4NTk0NjMgQzQ2Ljk3OTg0MTMsMTAuMzUwMDMyIDU3LjgxMTY5MzUsMTEuMzkzMDMzMyA4NC45ODg5NjY2LDE2LjExNTU4NDkgQzg3LjUxOTg4MiwxNi41NTUzNzgxIDg3Ljc0MzY2OTMsMjAuNTY3NzQwOSA4NS42NjAzMjgzLDI4LjE1MjY3MzMgQzk0LjgyMzE4NjQsMzEuNTEwNjcyNyA5OS4wMjE2MjQ5LDM0LjcwOTM1NzYgOTguMjU1NjQ0LDM3Ljc0ODcyNzkgQzkxLjYxNDYwMTYsNjQuMTAwMDIwOCA4Mi44Mjg3NDk1LDc2LjExNDI5MDkgNjkuNTY4ODgyOCw4MS43NjAwMDg2IEM1NC4zNTg2NjMzLDgzLjY4OTc5NTIgMzMuNzY0NDI0OCw3OC4zMTg1ODAzIDcuNzg2MTY3MjksNjUuNjQ2MzYzOCBaIiBpZD0iUGF0aC05IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1My4wNjUyMjYsIDQ2LjUzMzM5NCkgcm90YXRlKDE1LjAwMDAwMCkgdHJhbnNsYXRlKC01My4wNjUyMjYsIC00Ni41MzMzOTQpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="#" />
                        <br /><br /><span className="text-secondary">No Data</span>
                    </h6>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className="row" style={{ marginTop: "-10px" }}>
                        <div className="col-6 row">
                            <div className="col-3" style={{ color: '#A1A295', fontSize: "14px" }}>
                                Time
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        All Pairs
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">All Pairs</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Current Pairs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        All Types
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">All Types</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Stop Market</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Stop Limit</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        Buy/Sells
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Buy/Sells</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Sell</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 row">
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Stop price
                            </div>
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Price
                            </div>
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Amount
                            </div>
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Cancel All <i className="fa fa-info-circle text-secondary" style={{ cursor: "pointer" }}></i>
                            </div>
                        </div>
                    </div>
                    <br />
                    <h6 className="text-center">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIxcHgiIGhlaWdodD0iNzZweCIgdmlld0JveD0iMCAwIDEyMSA3NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuMiAoNjcxNDUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmRlZmF1bHRkYXJrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iNjkuMzU2OTM1MSUiIHgyPSI0Ni42OTU5NDM3JSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkQyRjMxIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM2NDc1NCIgc3RvcC1vcGFjaXR5PSIwLjUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI5Mi41MTQ0OTg2JSIgeTE9IjIyLjU4MzQxOSUiIHgyPSIxMS42OTY4NjE2JSIgeTI9Ijc2LjcyMzAwMzQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MzQ4NTMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM2M0I0OCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZGVmYXVsdGRhcmsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjAwMDAwMCwgLTI2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTcuMDAwMDAwKSIgaWQ9ImRlZmF1bHQiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNzAiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7IiBwb2ludHM9IjI1LjI3MDE1NzYgNTIuNjM3OTg3NyA2MC42ODE3ODUgODQuNzE0NjEyNiAxMjUuMzQwNzI5IDczLjI0NDMwMjggODQuOTAwMDU5NiA0MS41NTUwNDMyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTg5LjM4MTM0NjEsMjcuMDM3NjI4MSBDOTIuMzAwNzQzMiwyOS45MDcxNjU4IDk0Ljc4OTM2MDIsMzIuNjg5NzA2OCA5Ni44NDcxOTcsMzUuMzg1MjUxMiBDMTAxLjEzMTA2Nyw0MC45OTY2NTk1IDEwMi4yMzY5NjYsNDcuOTM2MzQzMSAxMDEuOTM5MTAzLDQ4LjEzMjIzMTcgQzEwMC4zMTQwOTQsNDkuMjAwOTEzNyA5MS4xOTYzMDEsNDMuODUyNTUwNiA4OS4zODEzNDYxLDM4Ljg0NTQ2MTMgQzg4LjI5MzI3OTksMzUuODQzNzA5NCA4OC4yOTMyNzk5LDMxLjkwNzc2NSA4OS4zODEzNDYxLDI3LjAzNzYyODEgWiIgaWQ9IlBhdGgtMTIiIGZpbGw9IiM2NDY4NzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk1LjI3NDkzNiwgMzcuNjUzNzYzKSByb3RhdGUoMTUuMDAwMDAwKSB0cmFuc2xhdGUoLTk1LjI3NDkzNiwgLTM3LjY1Mzc2MykgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNzg2MTY3MjksNjUuNjQ2MzYzOCBDMjkuMTQxNjgwNiw1MS4wNzU2OTgzIDQwLjMzNzA1NjQsMzIuOTIyMjI1OCA0MS4zNzIyOTQ4LDExLjE4NTk0NjMgQzQ2Ljk3OTg0MTMsMTAuMzUwMDMyIDU3LjgxMTY5MzUsMTEuMzkzMDMzMyA4NC45ODg5NjY2LDE2LjExNTU4NDkgQzg3LjUxOTg4MiwxNi41NTUzNzgxIDg3Ljc0MzY2OTMsMjAuNTY3NzQwOSA4NS42NjAzMjgzLDI4LjE1MjY3MzMgQzk0LjgyMzE4NjQsMzEuNTEwNjcyNyA5OS4wMjE2MjQ5LDM0LjcwOTM1NzYgOTguMjU1NjQ0LDM3Ljc0ODcyNzkgQzkxLjYxNDYwMTYsNjQuMTAwMDIwOCA4Mi44Mjg3NDk1LDc2LjExNDI5MDkgNjkuNTY4ODgyOCw4MS43NjAwMDg2IEM1NC4zNTg2NjMzLDgzLjY4OTc5NTIgMzMuNzY0NDI0OCw3OC4zMTg1ODAzIDcuNzg2MTY3MjksNjUuNjQ2MzYzOCBaIiBpZD0iUGF0aC05IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1My4wNjUyMjYsIDQ2LjUzMzM5NCkgcm90YXRlKDE1LjAwMDAwMCkgdHJhbnNsYXRlKC01My4wNjUyMjYsIC00Ni41MzMzOTQpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="#" />
                        <br /><br /><span className="text-secondary">No Data</span>
                    </h6>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className="row" style={{ marginTop: "-10px" }}>
                        <div className="col-5 row">
                            <div className="col-3" style={{ color: '#A1A295', fontSize: "14px" }}>
                                Time
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        All Pairs
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">All Pairs</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Current Pairs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        All Types
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">All Types</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Stop Market</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Stop Limit</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        Buy/Sells
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Buy/Sells</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Sell</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 row">
                            <div className="col" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Stop price
                            </div>
                            <div className="col" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Price
                            </div>
                            <div className="col" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Amount
                            </div>
                            <div className="col" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Filled
                            </div>
                            <div className="col" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Avg. Price
                            </div>
                            <div className="col" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Cancel All <i className="fa fa-info-circle text-secondary" style={{ cursor: "pointer" }}></i>
                            </div>
                        </div>
                    </div>
                    <br />
                    <h6 className="text-center">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIxcHgiIGhlaWdodD0iNzZweCIgdmlld0JveD0iMCAwIDEyMSA3NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuMiAoNjcxNDUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmRlZmF1bHRkYXJrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iNjkuMzU2OTM1MSUiIHgyPSI0Ni42OTU5NDM3JSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkQyRjMxIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM2NDc1NCIgc3RvcC1vcGFjaXR5PSIwLjUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI5Mi41MTQ0OTg2JSIgeTE9IjIyLjU4MzQxOSUiIHgyPSIxMS42OTY4NjE2JSIgeTI9Ijc2LjcyMzAwMzQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MzQ4NTMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM2M0I0OCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZGVmYXVsdGRhcmsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjAwMDAwMCwgLTI2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTcuMDAwMDAwKSIgaWQ9ImRlZmF1bHQiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNzAiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7IiBwb2ludHM9IjI1LjI3MDE1NzYgNTIuNjM3OTg3NyA2MC42ODE3ODUgODQuNzE0NjEyNiAxMjUuMzQwNzI5IDczLjI0NDMwMjggODQuOTAwMDU5NiA0MS41NTUwNDMyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTg5LjM4MTM0NjEsMjcuMDM3NjI4MSBDOTIuMzAwNzQzMiwyOS45MDcxNjU4IDk0Ljc4OTM2MDIsMzIuNjg5NzA2OCA5Ni44NDcxOTcsMzUuMzg1MjUxMiBDMTAxLjEzMTA2Nyw0MC45OTY2NTk1IDEwMi4yMzY5NjYsNDcuOTM2MzQzMSAxMDEuOTM5MTAzLDQ4LjEzMjIzMTcgQzEwMC4zMTQwOTQsNDkuMjAwOTEzNyA5MS4xOTYzMDEsNDMuODUyNTUwNiA4OS4zODEzNDYxLDM4Ljg0NTQ2MTMgQzg4LjI5MzI3OTksMzUuODQzNzA5NCA4OC4yOTMyNzk5LDMxLjkwNzc2NSA4OS4zODEzNDYxLDI3LjAzNzYyODEgWiIgaWQ9IlBhdGgtMTIiIGZpbGw9IiM2NDY4NzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk1LjI3NDkzNiwgMzcuNjUzNzYzKSByb3RhdGUoMTUuMDAwMDAwKSB0cmFuc2xhdGUoLTk1LjI3NDkzNiwgLTM3LjY1Mzc2MykgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNzg2MTY3MjksNjUuNjQ2MzYzOCBDMjkuMTQxNjgwNiw1MS4wNzU2OTgzIDQwLjMzNzA1NjQsMzIuOTIyMjI1OCA0MS4zNzIyOTQ4LDExLjE4NTk0NjMgQzQ2Ljk3OTg0MTMsMTAuMzUwMDMyIDU3LjgxMTY5MzUsMTEuMzkzMDMzMyA4NC45ODg5NjY2LDE2LjExNTU4NDkgQzg3LjUxOTg4MiwxNi41NTUzNzgxIDg3Ljc0MzY2OTMsMjAuNTY3NzQwOSA4NS42NjAzMjgzLDI4LjE1MjY3MzMgQzk0LjgyMzE4NjQsMzEuNTEwNjcyNyA5OS4wMjE2MjQ5LDM0LjcwOTM1NzYgOTguMjU1NjQ0LDM3Ljc0ODcyNzkgQzkxLjYxNDYwMTYsNjQuMTAwMDIwOCA4Mi44Mjg3NDk1LDc2LjExNDI5MDkgNjkuNTY4ODgyOCw4MS43NjAwMDg2IEM1NC4zNTg2NjMzLDgzLjY4OTc5NTIgMzMuNzY0NDI0OCw3OC4zMTg1ODAzIDcuNzg2MTY3MjksNjUuNjQ2MzYzOCBaIiBpZD0iUGF0aC05IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1My4wNjUyMjYsIDQ2LjUzMzM5NCkgcm90YXRlKDE1LjAwMDAwMCkgdHJhbnNsYXRlKC01My4wNjUyMjYsIC00Ni41MzMzOTQpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="#" />
                        <br /><br /><span className="text-secondary">No Data</span>
                    </h6>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <div className="row" style={{ marginTop: "-10px" }}>
                        <div className="col-6 row">
                            <div className="col-3" style={{ color: '#A1A295', fontSize: "14px" }}>
                                Time
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        All Pairs
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">All Pairs</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Current Pairs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        All Types
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">All Types</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Stop Market</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Stop Limit</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3" style={{ marginTop: "-7px" }}>
                                <div class="dropdown">
                                    <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: 'transparent', color: '#A1A295', fontSize: "14px" }}>
                                        Buy/Sells
                                    </a>
                                    <ul class="dropdown-menu bg-secondary" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Buy/Sells</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Sell</a></li>
                                        <li><a class="dropdown-item" style={{ color: "#c4c4c4" }} href="#">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 row">
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Filled Price
                            </div>
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Amount
                            </div>
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Volume
                            </div>
                            <div className="col-3" style={{ textAlign: "right", color: '#A1A295', fontSize: "14px" }}>
                                Fee
                            </div>
                        </div>
                    </div>
                    <br />
                    <h6 className="text-center">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIxcHgiIGhlaWdodD0iNzZweCIgdmlld0JveD0iMCAwIDEyMSA3NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuMiAoNjcxNDUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmRlZmF1bHRkYXJrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iNjkuMzU2OTM1MSUiIHgyPSI0Ni42OTU5NDM3JSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMkQyRjMxIiBzdG9wLW9wYWNpdHk9IjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM2NDc1NCIgc3RvcC1vcGFjaXR5PSIwLjUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI5Mi41MTQ0OTg2JSIgeTE9IjIyLjU4MzQxOSUiIHgyPSIxMS42OTY4NjE2JSIgeTI9Ijc2LjcyMzAwMzQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MzQ4NTMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM2M0I0OCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZGVmYXVsdGRhcmsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjAwMDAwMCwgLTI2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTcuMDAwMDAwKSIgaWQ9ImRlZmF1bHQiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNzAiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7IiBwb2ludHM9IjI1LjI3MDE1NzYgNTIuNjM3OTg3NyA2MC42ODE3ODUgODQuNzE0NjEyNiAxMjUuMzQwNzI5IDczLjI0NDMwMjggODQuOTAwMDU5NiA0MS41NTUwNDMyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTg5LjM4MTM0NjEsMjcuMDM3NjI4MSBDOTIuMzAwNzQzMiwyOS45MDcxNjU4IDk0Ljc4OTM2MDIsMzIuNjg5NzA2OCA5Ni44NDcxOTcsMzUuMzg1MjUxMiBDMTAxLjEzMTA2Nyw0MC45OTY2NTk1IDEwMi4yMzY5NjYsNDcuOTM2MzQzMSAxMDEuOTM5MTAzLDQ4LjEzMjIzMTcgQzEwMC4zMTQwOTQsNDkuMjAwOTEzNyA5MS4xOTYzMDEsNDMuODUyNTUwNiA4OS4zODEzNDYxLDM4Ljg0NTQ2MTMgQzg4LjI5MzI3OTksMzUuODQzNzA5NCA4OC4yOTMyNzk5LDMxLjkwNzc2NSA4OS4zODEzNDYxLDI3LjAzNzYyODEgWiIgaWQ9IlBhdGgtMTIiIGZpbGw9IiM2NDY4NzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk1LjI3NDkzNiwgMzcuNjUzNzYzKSByb3RhdGUoMTUuMDAwMDAwKSB0cmFuc2xhdGUoLTk1LjI3NDkzNiwgLTM3LjY1Mzc2MykgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNzg2MTY3MjksNjUuNjQ2MzYzOCBDMjkuMTQxNjgwNiw1MS4wNzU2OTgzIDQwLjMzNzA1NjQsMzIuOTIyMjI1OCA0MS4zNzIyOTQ4LDExLjE4NTk0NjMgQzQ2Ljk3OTg0MTMsMTAuMzUwMDMyIDU3LjgxMTY5MzUsMTEuMzkzMDMzMyA4NC45ODg5NjY2LDE2LjExNTU4NDkgQzg3LjUxOTg4MiwxNi41NTUzNzgxIDg3Ljc0MzY2OTMsMjAuNTY3NzQwOSA4NS42NjAzMjgzLDI4LjE1MjY3MzMgQzk0LjgyMzE4NjQsMzEuNTEwNjcyNyA5OS4wMjE2MjQ5LDM0LjcwOTM1NzYgOTguMjU1NjQ0LDM3Ljc0ODcyNzkgQzkxLjYxNDYwMTYsNjQuMTAwMDIwOCA4Mi44Mjg3NDk1LDc2LjExNDI5MDkgNjkuNTY4ODgyOCw4MS43NjAwMDg2IEM1NC4zNTg2NjMzLDgzLjY4OTc5NTIgMzMuNzY0NDI0OCw3OC4zMTg1ODAzIDcuNzg2MTY3MjksNjUuNjQ2MzYzOCBaIiBpZD0iUGF0aC05IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1My4wNjUyMjYsIDQ2LjUzMzM5NCkgcm90YXRlKDE1LjAwMDAwMCkgdHJhbnNsYXRlKC01My4wNjUyMjYsIC00Ni41MzMzOTQpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="#" />
                        <br /><br /><span className="text-secondary">No Data</span>
                    </h6>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
