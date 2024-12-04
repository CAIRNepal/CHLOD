// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import {jsx as $hgUW1$jsx, jsxs as $hgUW1$jsxs, Fragment as $hgUW1$Fragment} from "react/jsx-runtime";
import $hgUW1$react, {useContext as $hgUW1$useContext, createContext as $hgUW1$createContext, useState as $hgUW1$useState, useEffect as $hgUW1$useEffect, Component as $hgUW1$Component, useReducer as $hgUW1$useReducer, Fragment as $hgUW1$Fragment1} from "react";
import $hgUW1$proptypes from "prop-types";
import $hgUW1$swaggeruireact from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import {Link as $hgUW1$Link, useNavigate as $hgUW1$useNavigate} from "react-router-dom";
import {Parser as $hgUW1$Parser} from "html-to-react";
import {DndProvider as $hgUW1$DndProvider, useDrop as $hgUW1$useDrop, useDrag as $hgUW1$useDrag} from "react-dnd";
import {HTML5Backend as $hgUW1$HTML5Backend} from "react-dnd-html5-backend";
import $hgUW1$reactariamodal from "react-aria-modal";
import $hgUW1$validator from "validator";
import {Navbar as $hgUW1$Navbar, NavbarToggler as $hgUW1$NavbarToggler, Collapse as $hgUW1$Collapse, Nav as $hgUW1$Nav, NavItem as $hgUW1$NavItem, Input as $hgUW1$Input, Label as $hgUW1$Label, Button as $hgUW1$Button, FormGroup as $hgUW1$FormGroup, Dropdown as $hgUW1$Dropdown, DropdownToggle as $hgUW1$DropdownToggle, DropdownMenu as $hgUW1$DropdownMenu, DropdownItem as $hgUW1$DropdownItem} from "reactstrap";
import {FontAwesomeIcon as $hgUW1$FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useQuery as $hgUW1$useQuery} from "@tanstack/react-query";
import {createColumnHelper as $hgUW1$createColumnHelper, useReactTable as $hgUW1$useReactTable, getCoreRowModel as $hgUW1$getCoreRowModel, getSortedRowModel as $hgUW1$getSortedRowModel, getFilteredRowModel as $hgUW1$getFilteredRowModel, flexRender as $hgUW1$flexRender} from "@tanstack/react-table";
import {library as $hgUW1$library, icon as $hgUW1$icon} from "@fortawesome/fontawesome-svg-core";
import {fas as $hgUW1$fas} from "@fortawesome/free-solid-svg-icons";
import {isEmpty as $hgUW1$isEmpty, countBy as $hgUW1$countBy} from "lodash";
import $hgUW1$excerpts from "excerpts";
import $hgUW1$querystring from "query-string";
import $hgUW1$reactjspagination from "react-js-pagination";
import {List as $hgUW1$List, BulletList as $hgUW1$BulletList} from "react-content-loader";
import {fab as $hgUW1$fab} from "@fortawesome/free-brands-svg-icons";

const $c39b21100f9555ed$var$ApiDocs = ({ endpoint: endpoint, uuid: uuid })=>{
    const url = uuid ? `${endpoint}/${uuid}` : endpoint;
    return typeof window === "undefined" ? null : /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$swaggeruireact), {
        url: url,
        docExpansion: "list"
    });
};
$c39b21100f9555ed$var$ApiDocs.defaultProps = {
    uuid: ""
};
$c39b21100f9555ed$var$ApiDocs.propTypes = {
    endpoint: (0, $hgUW1$proptypes).string.isRequired,
    uuid: (0, $hgUW1$proptypes).string
};
var $c39b21100f9555ed$export$2e2bcd8739ae039 = $c39b21100f9555ed$var$ApiDocs;





class $431f685c2f6b35cd$var$DataIcon extends (0, $hgUW1$react).PureComponent {
    render() {
        const { icon: icon, height: height, width: width, color: color } = this.props;
        switch(icon){
            case "density-1":
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    width: width,
                    height: height,
                    viewBox: "0 0 160 160",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: color,
                        d: "M141.441 46.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V27.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 128.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014v-19.496c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 87.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V68.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496z"
                    })
                });
            case "density-2":
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    width: width,
                    height: height,
                    viewBox: "0 0 160 160",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: color,
                        d: "M141.551 36.002c0 1.757-1.35 3.182-3.014 3.182H17.682c-1.664 0-3.014-1.425-3.014-3.182V24.92c0-1.758 1.35-3.182 3.014-3.182h120.855c1.664 0 3.014 1.424 3.014 3.182v11.082zm0 20.943c0-1.758-1.35-3.182-3.014-3.182H17.682c-1.664 0-3.014 1.424-3.014 3.182v11.081c0 1.759 1.35 3.184 3.014 3.184h120.855c1.664 0 3.014-1.425 3.014-3.184V56.945zm0 32.026c0-1.758-1.35-3.183-3.014-3.183H17.682c-1.664 0-3.014 1.425-3.014 3.183v11.081c0 1.758 1.35 3.182 3.014 3.182h120.855c1.664 0 3.014-1.424 3.014-3.182V88.971zm0 32.025c0-1.758-1.35-3.182-3.014-3.182H17.682c-1.664 0-3.014 1.424-3.014 3.182v11.082c0 1.757 1.35 3.182 3.014 3.182h120.855c1.664 0 3.014-1.425 3.014-3.182v-11.082z"
                    })
                });
            case "density-3":
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    width: width,
                    height: height,
                    viewBox: "0 0 160 160",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: color,
                        d: "M141.624 51.054a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM142.015 30.76a3.015 3.015 0 0 1-3.014 3.014H18.146a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014h120.855a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 91.642a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 71.348a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 111.936a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 132.229a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496z"
                    })
                });
            case "group":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    width: width,
                    height: height,
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: color,
                            d: "M13.338 14.604c-.436-.157-.884-.318-1.338-.486v-1.924c.339-.336.913-1.149.991-2.837.459-.215.759-.735.759-1.393 0-.564-.222-1.028-.576-1.284.325-.646.833-1.74.561-2.836-.332-1.334-2.253-1.808-3.798-1.808-1.368 0-3.032.372-3.625 1.383-.731-.034-1.107.263-1.303.515-.596.769-.253 2.095-.07 2.808.03.115.056.205.061.222v2c0 1.89 1.162 2.931 2 3.337v1.817c-.405.151-.818.3-1.23.448-2.607.939-4.858 1.75-5.271 2.996C.006 19.051 0 22.36 0 22.5a.5.5 0 00.5.5h18a.5.5 0 00.5-.5c0-.14-.006-3.449-.499-4.938-.415-1.25-2.51-2.004-5.163-2.958zM1.007 22c.021-.971.104-3.104.441-4.124.26-.785 2.7-1.664 4.661-2.37.527-.19 1.058-.381 1.569-.575A.5.5 0 008 14.464v-2.5a.505.505 0 00-.349-.477C7.583 11.465 6 10.931 6 8.964v-2c0-.114-.031-.234-.092-.472-.111-.428-.404-1.564-.108-1.946.038-.048.249-.188.727-.092a.498.498 0 00.584-.37c.148-.598 1.364-1.049 2.827-1.049s2.679.451 2.827 1.049c.199.802-.281 1.749-.54 2.257-.145.286-.225.443-.225.623a.5.5 0 00.5.5c.172 0 .25.293.25.5 0 .208-.078.5-.25.5a.5.5 0 00-.5.5c0 2.01-.764 2.575-.763 2.575a.498.498 0 00-.237.425v2.5a.5.5 0 00.324.468c.568.214 1.131.417 1.676.613 2.109.759 4.291 1.544 4.552 2.332.337 1.018.421 3.152.441 4.124H1.007z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: color,
                            d: "M23.501 17.562c-.388-1.167-2.337-2.352-6.501-3.942v-.925c.339-.337.913-1.15.991-2.837.192-.09.358-.235.487-.429.175-.263.271-.605.271-.965 0-.572-.228-1.041-.589-1.294.322-.694.85-1.899.575-3.01-.173-.693-.962-1.454-1.877-1.808-.893-.346-1.785-.27-2.51.215a.5.5 0 10.554.832c.574-.382 1.185-.273 1.595-.115.705.274 1.197.834 1.268 1.117.203.815-.288 1.868-.55 2.433-.143.306-.215.46-.215.63a.498.498 0 00.5.5c.172 0 .25.293.25.5a.77.77 0 01-.104.41c-.055.083-.103.09-.146.09a.5.5 0 00-.5.5c0 2.01-.764 2.575-.763 2.575a.498.498 0 00-.237.425v1.5a.5.5 0 00.324.468c3.856 1.454 5.952 2.613 6.228 3.445.337 1.018.421 3.152.441 4.124H21A.5.5 0 0021 23h2.5a.5.5 0 00.5-.5c0-.14-.006-3.449-.499-4.938z"
                        })
                    ]
                });
            case "select":
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: width,
                    height: height,
                    viewBox: "0 0 10 14",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("g", {
                        fill: color,
                        fillRule: "evenodd",
                        children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            d: "M.62639628 5.99993896H9.3727389c.25339173.00130856.482416-.15074264.57956202-.38477624.09714598-.2340336.04312294-.50357616-.13670922-.6820964L5.4401815.1835435C5.32475606.06613116 5.1670083 0 5.00236114 0c-.16464716 0-.3223949.06613117-.43782037.1835435L.1835435 4.93306632C.06613116 5.0484918 0 5.20623953 0 5.3708867s.06613117.32239492.1835435.43782038c.1146444.1224934.27508006.19177244.44285278.19123188zM9.3727389 7.9999685H.6263963c-.1662653-.00316183-.32647608.06237894-.4428528.18116705C.0661312 8.296561 0 8.45430875 0 8.61895592s.06613117.32239492.1835435.43782037l4.38099726 4.7596802C4.67996622 13.9338688 4.83771396 14 5.00236113 14s.32239492-.0661312.43782038-.1835435l4.3754102-4.74961537c.17983216-.17852023.2338552-.44806278.13670922-.68209638-.09714602-.2340336-.3261703-.3860848-.579562-.38477625z"
                        })
                    })
                });
            case "times":
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    width: width,
                    height: height,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 352 512",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: color,
                        d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    })
                });
            default:
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    width: width,
                    height: height,
                    viewBox: "0 0 160 160",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: color,
                        d: "M141.441 46.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V27.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 128.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014v-19.496c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 87.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V68.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496z"
                    })
                });
        }
    }
}
$431f685c2f6b35cd$var$DataIcon.defaultProps = {
    icon: "density-1",
    color: "black",
    width: 20,
    height: 20
};
$431f685c2f6b35cd$var$DataIcon.propTypes = {
    icon: (0, $hgUW1$proptypes).string,
    color: (0, $hgUW1$proptypes).string,
    width: (0, $hgUW1$proptypes).number,
    height: (0, $hgUW1$proptypes).number
};
var $431f685c2f6b35cd$export$2e2bcd8739ae039 = $431f685c2f6b35cd$var$DataIcon;






const $af3fcd719f41850c$var$DataTableDensity = ({ active: active, items: items, densityChange: densityChange, className: className, screenReaderClass: screenReaderClass, title: title })=>/*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                className: "density-buttons-title",
                children: title
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "density-buttons",
                children: items.map((item)=>{
                    let srClass = screenReaderClass;
                    if (!item.icon) srClass = "";
                    return /*#__PURE__*/ (0, $hgUW1$jsxs)("button", {
                        type: "button",
                        onClick: ()=>densityChange(item.value),
                        title: item.text,
                        className: active === item.text ? "active" : "",
                        children: [
                            item.icon && /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Fragment), {
                                children: item.icon
                            }),
                            /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                                className: srClass,
                                children: item.text
                            })
                        ]
                    }, item.text);
                })
            })
        ]
    });
$af3fcd719f41850c$var$DataTableDensity.defaultProps = {
    items: [
        {
            icon: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $431f685c2f6b35cd$export$2e2bcd8739ae039), {
                name: "density-1",
                height: 20,
                width: 20,
                icon: "density-1",
                fill: "#666666"
            }),
            text: "expanded"
        },
        {
            icon: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $431f685c2f6b35cd$export$2e2bcd8739ae039), {
                name: "density-2",
                height: 20,
                width: 20,
                icon: "density-2",
                fill: "#666666"
            }),
            text: "normal"
        },
        {
            icon: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $431f685c2f6b35cd$export$2e2bcd8739ae039), {
                name: "density-3",
                height: 20,
                width: 20,
                icon: "density-3",
                fill: "#666666"
            }),
            text: "tight"
        }
    ],
    className: "data-table-density",
    screenReaderClass: "sr-only sr-only-focusable",
    title: "Display Density"
};
$af3fcd719f41850c$var$DataTableDensity.propTypes = {
    active: (0, $hgUW1$proptypes).string,
    densityChange: (0, $hgUW1$proptypes).func.isRequired,
    screenReaderClass: (0, $hgUW1$proptypes).string,
    className: (0, $hgUW1$proptypes).string,
    items: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).shape({
        icon: (0, $hgUW1$proptypes).node,
        text: (0, $hgUW1$proptypes).string
    })),
    title: (0, $hgUW1$proptypes).string
};
var $af3fcd719f41850c$export$2e2bcd8739ae039 = $af3fcd719f41850c$var$DataTableDensity;





const $33221421d2520c36$export$a0d1f3f5fa057587 = /*#__PURE__*/ (0, $hgUW1$createContext)(null);
const $33221421d2520c36$export$b63dc320f5671cb = {
    columnOrder: [],
    columns: [],
    columnVisibility: {},
    count: 0,
    currentPage: 0,
    density: "density-3",
    filters: [],
    loading: false,
    pageSize: 20,
    rowsTotal: 0,
    sort: []
};



const $10d756273efdc2df$var$DataTablePageResults = ({ total: total, className: className, viewing: viewing = false })=>{
    const { resourceState: resourceState } = (0, $hgUW1$useContext)((0, $33221421d2520c36$export$a0d1f3f5fa057587));
    const pageSize = resourceState.pageSize;
    const currentPage = resourceState.currentPage;
    // Add one to offset the 0 array index.
    const page = currentPage + 1;
    let displayTotal = total;
    const currentLowestResult = total <= 0 ? 0 : 1 + (pageSize * page - pageSize);
    let currentHighestResult = pageSize * page;
    if (total < 0) displayTotal = 0;
    if (currentHighestResult > total) currentHighestResult = displayTotal;
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $hgUW1$jsxs)("p", {
            children: [
                viewing && "Viewing ",
                /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                    className: "low-result",
                    children: currentLowestResult
                }),
                " ",
                "-",
                " ",
                /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                    className: "high-result",
                    children: currentHighestResult
                }),
                " ",
                "of",
                " ",
                /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                    className: "total",
                    children: displayTotal
                }),
                " ",
                "rows"
            ]
        })
    });
};
$10d756273efdc2df$var$DataTablePageResults.defaultProps = {
    className: "data-table-results"
};
$10d756273efdc2df$var$DataTablePageResults.propTypes = {
    className: (0, $hgUW1$proptypes).string,
    total: (0, $hgUW1$proptypes).number.isRequired
};
var $10d756273efdc2df$export$2e2bcd8739ae039 = $10d756273efdc2df$var$DataTablePageResults;






const $f88ff4b566e98b40$var$DataTablePageSizer = ({ label: label, options: options, className: className, selectClassName: selectClassName, id: id })=>{
    const { dispatch: dispatch, resourceState: resourceState } = (0, $hgUW1$useContext)((0, $33221421d2520c36$export$a0d1f3f5fa057587));
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("label", {
                htmlFor: `dc-${id}-pagesize`,
                children: label
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("select", {
                value: resourceState.pageSize,
                className: selectClassName,
                onChange: (e)=>dispatch({
                        type: "UPDATE_PAGE_SIZE",
                        data: {
                            pageSize: e.target.value
                        }
                    }),
                type: "select",
                name: `dc-${id}-pagesize`,
                id: `dc-${id}-pagesize`,
                children: options.map((opt)=>/*#__PURE__*/ (0, $hgUW1$jsx)("option", {
                        value: opt.value,
                        children: opt.label
                    }, opt.value))
            })
        ]
    });
};
$f88ff4b566e98b40$var$DataTablePageSizer.defaultProps = {
    label: "Rows per page",
    className: "dc-page-size-options",
    initSize: 20,
    options: [
        {
            label: "20",
            value: "20"
        },
        {
            label: "50",
            value: "50"
        },
        {
            label: "100",
            value: "100"
        }
    ],
    selectClassName: "page-size-select"
};
$f88ff4b566e98b40$var$DataTablePageSizer.propTypes = {
    label: (0, $hgUW1$proptypes).string,
    className: (0, $hgUW1$proptypes).string,
    selectClassName: (0, $hgUW1$proptypes).string,
    options: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).shape({
        defaultChecked: (0, $hgUW1$proptypes).bool,
        label: (0, $hgUW1$proptypes).string,
        value: (0, $hgUW1$proptypes).string
    })),
    id: (0, $hgUW1$proptypes).string.isRequired
};
var $f88ff4b566e98b40$export$2e2bcd8739ae039 = $f88ff4b566e98b40$var$DataTablePageSizer;





function $2070e1a380541855$var$IconList({ items: items, component: component, containerClass: containerClass, listClass: listClass, paneTitle: paneTitle, titleAlign: titleAlign }) {
    const ComponentToRender = component;
    let content = /*#__PURE__*/ (0, $hgUW1$jsx)("div", {});
    const styles = {
        textAlign: titleAlign
    };
    // If we have items, render them
    if (items) content = items.map((item)=>/*#__PURE__*/ (0, $hgUW1$jsx)(ComponentToRender, {
            title: item.title,
            image: item.image,
            link: item.ref,
            color: item.color,
            size: item.size,
            index: item.id
        }, item.id));
    else // Otherwise render a single component
    content = /*#__PURE__*/ (0, $hgUW1$jsx)(ComponentToRender, {});
    if (paneTitle) return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: `dc-icon-list  ${containerClass}`,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
                className: "pane-title",
                style: styles,
                children: paneTitle
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("ul", {
                className: listClass,
                children: content
            })
        ]
    });
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: "dc-icon-list  {containerClass}",
        children: /*#__PURE__*/ (0, $hgUW1$jsx)("ul", {
            className: listClass,
            children: content
        })
    });
}
$2070e1a380541855$var$IconList.defaultProps = {
    listClass: "dc-list",
    containerClass: "container",
    paneTitle: "",
    titleAlign: ""
};
$2070e1a380541855$var$IconList.propTypes = {
    component: (0, $hgUW1$proptypes).func.isRequired,
    items: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).shape({
        title: (0, $hgUW1$proptypes).string,
        link: (0, $hgUW1$proptypes).string,
        image: (0, $hgUW1$proptypes).string,
        size: (0, $hgUW1$proptypes).string,
        color: (0, $hgUW1$proptypes).string,
        identifier: (0, $hgUW1$proptypes).string
    })).isRequired,
    listClass: (0, $hgUW1$proptypes).string,
    containerClass: (0, $hgUW1$proptypes).string,
    paneTitle: (0, $hgUW1$proptypes).string,
    titleAlign: (0, $hgUW1$proptypes).string
};
var $2070e1a380541855$export$2e2bcd8739ae039 = $2070e1a380541855$var$IconList;









function $a4de17e3b28de8f4$var$TopicIcon({ title: title, size: size, fill: fill }) {
    switch(title){
        case "Health":
        case "Health Care":
        case "Healthcare":
            return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: size,
                height: size,
                viewBox: "0 0 100 100",
                children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                    fill: fill,
                    d: "M78.886 78.233v-7.817c0-6.065-5.017-11.083-11.083-11.083-6.067 0-11.084 5.018-11.084 11.083v17.501c0 3.5-2.917 6.416-6.417 6.416s-6.417-2.916-6.417-6.416v-31.15c6.533-.583 12.951-3.267 17.966-8.283 10.734-10.733 11.201-26.717 1.518-38.85.233-.7.35-1.4.35-2.217 0-3.5-2.916-6.417-6.416-6.417-3.501 0-6.417 2.917-6.417 6.417s2.916 6.417 6.417 6.417c1.05 0 1.983-.233 2.917-.7 7.583 10.15 7.116 23.217-1.634 31.967-9.334 9.333-24.618 9.45-33.834.117-8.75-8.75-9.333-21.934-1.633-32.083.816.467 1.867.7 2.917.7 3.5 0 6.417-2.917 6.417-6.417s-3.15-6.417-6.65-6.417c-3.5 0-6.417 2.917-6.417 6.417 0 .817.117 1.517.35 2.217-9.567 12.017-8.983 28.35 1.517 38.967 5.017 5.017 11.316 7.701 17.967 8.167v31.15C39.219 93.983 44.235 99 50.302 99s11.083-5.017 11.083-11.083V70.416c0-3.499 2.916-6.416 6.417-6.416 3.5 0 6.416 2.917 6.416 6.416v7.817c-4.666 1.05-8.167 5.25-8.167 10.267 0 5.833 4.667 10.5 10.5 10.5 5.834 0 10.5-4.667 10.5-10.5.001-5.017-3.498-9.217-8.165-10.267zM55.553 7.417c0-.933.816-1.75 1.75-1.75.933 0 1.75.817 1.75 1.75 0 .934-.817 1.75-1.75 1.75-.934 0-1.75-.817-1.75-1.75zm-29.751-1.75c.933 0 1.75.817 1.75 1.75 0 .934-.817 1.75-1.75 1.75-.934 0-1.75-.817-1.75-1.75 0-.934.817-1.75 1.75-1.75zm50.75 88.666c-3.266 0-5.833-2.566-5.833-5.833s2.567-5.834 5.833-5.834c3.268 0 5.834 2.567 5.834 5.834s-2.567 5.833-5.834 5.833z"
                })
            });
        case "Education":
            return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: size,
                height: size,
                viewBox: "0 0 100 100",
                children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                    fill: fill,
                    d: "M87.593 74.161H70.604c1.427-1.252 2.521-2.49 3.255-3.682 1.752-2.693 8.755-22.527 8.755-30.467 0-11.726-8.512-20.236-20.238-20.236-3.501 0-7.03 1.021-10.233 2.956-.105-1.718-.236-3.832-.705-6.069 1.188.327 2.212.475 3.27.475 1.117 0 2.767-.145 4.276-.833 4.02-1.654 6.772-5.571 7.013-9.993a2.19 2.19 0 0 0-.662-1.577c-2.078-1.925-4.812-2.985-7.7-2.985-1.492 0-2.94.285-4.301.846-2.171.868-4.108 2.541-5.372 4.624-1.158-1.873-2.395-3.41-3.768-4.685-.743-.743-2.122-.673-2.911.117-.77.77-.717 2.076.125 2.917 5.409 4.939 6.378 13.309 6.526 17.14-3.161-1.893-6.804-2.932-10.309-2.932-11.726 0-20.236 8.511-20.236 20.236 0 7.949 7.003 27.777 8.755 30.465.836 1.304 1.853 2.458 3.25 3.684h-8.386c-5.905 0-10.708 4.803-10.708 10.707v2.672c0 5.905 4.804 10.71 10.708 10.71h66.585a2.086 2.086 0 0 0 2.108-2.109V76.385c0-1.268-.906-2.224-2.108-2.224zM37.624 23.993c3.928 0 7.831 1.546 10.979 4.344.124.124.187.172.313.186.025.019.051.036.078.053l.074.111a.57.57 0 0 0 .515.167c.017.013.036.033.066.064l.073.072h.218c.246 0 .524 0 .808-.142.128-.062.224-.126.318-.189a2.05 2.05 0 0 1 .263-.158l.063-.044c2.915-2.803 6.814-4.346 10.982-4.346 9.431 0 16.018 6.587 16.018 16.019 0 7.149-6.693 26.169-8.095 28.22-2.361 3.71-6.453 5.925-10.945 5.925-2.889 0-5.614-.96-8.112-2.863a2.216 2.216 0 0 0-1.3-.39c-.491 0-.891.12-1.319.403-2.336 1.891-5.059 2.85-8.087 2.85-4.309-.11-8.461-2.427-10.834-6.042-1.337-2.112-8.097-20.909-8.097-28.22.002-9.432 6.589-16.02 16.021-16.02zm17.083-10.958c-1.55 0-2.942-.422-4.142-1.256.476-2.446 2.058-4.435 4.348-5.465a7.416 7.416 0 0 1 6.84.807c-.505 2.509-2.121 4.502-4.346 5.35-1.012.38-1.895.564-2.7.564zM85.6 78.262v15.653H21.123a6.497 6.497 0 0 1-6.49-6.489v-2.675a6.497 6.497 0 0 1 6.49-6.489H85.6z"
                })
            });
        case "Economy":
        case "Finance and Budgeting":
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: size,
                height: size,
                viewBox: "0 0 100 100",
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M10.311 92.75H83.777a2.116 2.116 0 0 0 2.111-2.111v-9.5h5.277a2.116 2.116 0 0 0 2.111-2.111V57.916h2.111a2.116 2.116 0 0 0 2.111-2.109V32.583c0-1.162-.95-2.111-2.111-2.111h-2.111V9.361a2.117 2.117 0 0 0-2.111-2.111h-76C8.2 7.25 2.5 12.95 2.5 19.917v65.022a7.792 7.792 0 0 0 7.811 7.811zm71.355-4.223h-71.25c-2.006 0-3.694-1.582-3.694-3.588v-.105c0-2.006 1.688-3.59 3.694-3.59H81.665v7.283zm11.611-34.832H69.105l-8.444-9.501 8.444-9.5h24.172v19.001zm-78.11-42.223h73.889v19h-20.9c-.634 0-1.161.211-1.583.739L56.228 42.822c-.739.844-.739 2.005 0 2.85l10.345 11.611c.422.422.949.74 1.583.74h20.9v19H10.417c-1.267 0-2.639.316-3.694.949V19.917c-.001-4.645 3.799-8.445 8.444-8.445z"
                    }),
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M73.223 37.861c-3.484 0-6.334 2.85-6.334 6.333s2.85 6.333 6.334 6.333c3.482 0 6.332-2.85 6.332-6.333s-2.85-6.333-6.332-6.333zm0 8.445c-1.162 0-2.111-.95-2.111-2.111s.949-2.111 2.111-2.111c1.16 0 2.11.95 2.11 2.111s-.95 2.111-2.11 2.111z"
                    })
                ]
            });
        case "Public Safety":
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: size,
                height: size,
                viewBox: "0 0 100 100",
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M49.993 26.67c-6.416 0-11.665 5.25-11.665 11.666 0 6.415 5.25 11.665 11.665 11.665s11.665-5.25 11.665-11.665c-.001-6.416-5.25-11.666-11.665-11.666zm0 18.664c-3.85 0-6.999-3.148-6.999-6.998 0-3.849 3.148-6.999 6.999-6.999 3.848 0 6.999 3.15 6.999 6.999-.001 3.85-3.151 6.998-6.999 6.998z"
                    }),
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M98.287 39.036l-4.667-4.667c-1.285-1.399-1.633-4.432-1.633-5.365 0-1.05-.702-1.982-1.752-2.216-.116 0-17.495-4.316-22.86-6.999-9.101-4.549-15.983-9.332-16.1-9.332-.233 0-.584-.117-.816-.117-.117 0-.351.117-.467.117h-.35c-.351-.117-.818.116-.818.232 0 0-7.115 4.667-16.097 9.216-5.366 2.683-22.63 6.765-22.864 6.765-1.05.234-1.749 1.168-1.866 2.218 0 .933-.35 4.082-1.633 5.365l-4.665 4.665c-.934.935-.934 2.334 0 3.268l15.863 15.979c-.116.352-.233.818-.233 1.169v13.997c0 .467.117.934.233 1.398a2.605 2.605 0 0 0 .233 2.45c.467.467 10.382 12.48 32.195 12.48 21.814 0 31.727-12.014 32.194-12.596.583-.702.583-1.634.235-2.451.116-.467.231-.934.231-1.398v-13.88c0-.467-.115-.817-.115-1.169l15.864-15.863a2.363 2.363 0 0 0-.112-3.266zm-20.3 34.295h-55.99V59.334h55.99v13.997zm-52.141 4.667h48.409c-4.433 3.498-12.365 6.998-24.262 6.998-11.899 0-19.831-3.5-24.147-6.998zm53.31-23.215c-.352-.115-.818-.115-1.169-.115h-55.99c-.467 0-.816.115-1.167.115L6.599 40.669l3.032-3.032c1.984-1.984 2.683-4.9 2.917-6.767 4.549-1.166 17.382-4.315 22.163-6.765 7.116-3.617 12.833-7.116 15.282-8.633 2.449 1.517 8.165 5.133 15.283 8.633 4.782 2.449 17.613 5.599 22.161 6.765.235 1.866.934 4.782 2.918 6.767l3.03 3.032-14.229 14.114z"
                    })
                ]
            });
        case "Transportation":
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: size,
                height: size,
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M14.5 2h-5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM14 4h-4V3h4v1zM6.5 20h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM14.5 20h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1z"
                    }),
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M23.5 7H20V4c0-2.206-1.794-4-4-4H8C5.794 0 4 1.794 4 4v3H.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V8h1v13.5c0 .652.418 1.208 1 1.414v.586a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V23h8v.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-.586c.582-.206 1-.762 1-1.414V8h1v6.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM2 14H1V8h1v6zM5 4c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v2H5V4zm14 17.5c0 .275-.225.5-.5.5h-13a.5.5 0 0 1-.5-.5V16h14v5.5zm0-6.5H5V7h14v8zm4-1h-1V8h1v6z"
                    })
                ]
            });
        case "Natural Resources":
        case "Environment":
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: size,
                height: size,
                viewBox: "0 0 100 100",
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        d: "M97.251 73.084c-2.444 0-3.584-1.14-5.16-2.716-1.797-1.799-4.034-4.034-8.341-4.034s-6.543 2.235-8.34 4.034c-1.576 1.576-2.717 2.716-5.16 2.716-2.441 0-3.582-1.14-5.16-2.716-1.797-1.799-4.031-4.034-8.34-4.034s-6.543 2.235-8.34 4.034c-1.578 1.576-2.717 2.716-5.16 2.716s-3.582-1.14-5.16-2.716c-1.797-1.799-4.033-4.034-8.34-4.034-4.308 0-6.543 2.235-8.341 4.034-1.578 1.576-2.717 2.716-5.16 2.716-2.442 0-3.582-1.14-5.159-2.716-1.798-1.799-4.033-4.034-8.341-4.034a2.25 2.25 0 0 0 0 4.498c2.442 0 3.582 1.142 5.16 2.716 1.797 1.799 4.033 4.035 8.34 4.035 4.308 0 6.543-2.236 8.341-4.035 1.578-1.574 2.717-2.716 5.16-2.716s3.582 1.142 5.159 2.716c1.798 1.799 4.033 4.035 8.341 4.035s6.543-2.236 8.34-4.035c1.578-1.574 2.719-2.716 5.16-2.716s3.582 1.142 5.16 2.716c1.797 1.799 4.031 4.035 8.34 4.035 4.307 0 6.543-2.236 8.341-4.035 1.576-1.574 2.716-2.716 5.159-2.716s3.584 1.142 5.16 2.716c1.797 1.799 4.033 4.035 8.341 4.035a2.25 2.25 0 0 0 0-4.499zM2.75 57.332c2.442 0 3.582 1.142 5.16 2.716 1.797 1.799 4.033 4.034 8.34 4.034 4.308 0 6.543-2.235 8.341-4.034 1.578-1.574 2.717-2.716 5.16-2.716s3.582 1.142 5.159 2.716c1.798 1.799 4.033 4.034 8.341 4.034s6.543-2.235 8.34-4.034c1.578-1.574 2.72-2.716 5.16-2.716s3.582 1.142 5.16 2.716c1.797 1.799 4.03 4.034 8.34 4.034 4.306 0 6.543-2.235 8.341-4.034 1.576-1.574 2.717-2.716 5.159-2.716 2.444 0 3.584 1.142 5.16 2.716 1.797 1.799 4.034 4.034 8.341 4.034a2.25 2.25 0 0 0 0-4.498c-2.443 0-3.584-1.142-5.16-2.716-1.797-1.799-4.033-4.034-8.341-4.034-4.306 0-6.543 2.235-8.34 4.034-1.576 1.574-2.716 2.716-5.16 2.716-2.44 0-3.582-1.142-5.16-2.716-1.797-1.799-4.03-4.034-8.34-4.034s-6.543 2.235-8.34 4.034c-1.578 1.574-2.717 2.716-5.16 2.716s-3.582-1.142-5.16-2.716c-1.797-1.799-4.033-4.034-8.34-4.034-4.308 0-6.543 2.235-8.341 4.034-1.578 1.574-2.717 2.716-5.16 2.716-2.442 0-3.582-1.142-5.159-2.716-1.798-1.799-4.033-4.034-8.341-4.034a2.25 2.25 0 1 0 0 4.498z"
                    }),
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        d: "M67.836 39.57v7.735l-.019 3.177a2.25 2.25 0 0 0 4.499 0l.007-1.732h.011v-2.751l.001-.249h-.001V32.82c7.62-1.097 13.5-7.651 13.5-15.57A2.25 2.25 0 0 0 83.585 15c-4.406 0-8.391 1.823-11.251 4.749V17.25a2.25 2.25 0 0 0-4.498 0v9.248c-2.86-2.925-6.847-4.748-11.251-4.748a2.25 2.25 0 0 0-2.25 2.25c0 7.918 5.88 14.472 13.501 15.57zm-.29-4.61a11.283 11.283 0 0 1-8.422-8.421 11.289 11.289 0 0 1 8.422 8.421zm5.078-6.749a11.287 11.287 0 0 1 8.422-8.422 11.287 11.287 0 0 1-8.422 8.422zM32.5 25.333a2.25 2.25 0 0 0-2.25-2.25c-4.404 0-8.391 1.823-11.251 4.748v-9.248a2.25 2.25 0 1 0-4.498 0v2.499c-2.86-2.926-6.845-4.749-11.251-4.749A2.25 2.25 0 0 0 1 18.583c0 7.919 5.88 14.473 13.5 15.57v12.93l.001.249v2.75h.011l.007 1.732a2.25 2.25 0 0 0 4.499 0l-.019-3.177v-7.735C26.62 39.806 32.5 33.251 32.5 25.333zm-4.79 2.54a11.283 11.283 0 0 1-8.422 8.421 11.286 11.286 0 0 1 8.422-8.421zm-21.921-6.75a11.287 11.287 0 0 1 8.422 8.422 11.286 11.286 0 0 1-8.422-8.422zm35.757 4.946v21.419l-.019 3.178a2.25 2.25 0 0 0 4.499 0l.007-1.733h.011v-2.75l.001-.249h-.001V19.319c7.62-1.097 13.5-7.651 13.5-15.57a2.25 2.25 0 0 0-2.25-2.25c-4.406 0-8.39 1.823-11.25 4.749V3.75a2.25 2.25 0 0 0-4.498 0v9.248c-2.86-2.925-6.847-4.748-11.251-4.748a2.25 2.25 0 0 0-2.25 2.25c0 7.917 5.881 14.472 13.501 15.569zm-.29-4.61a11.283 11.283 0 0 1-8.422-8.421 11.289 11.289 0 0 1 8.422 8.421zm5.078-6.749a11.287 11.287 0 0 1 8.421-8.422 11.28 11.28 0 0 1-8.421 8.422zM43.25 84.333a2.25 2.25 0 0 0 0-4.499 8.975 8.975 0 0 0-7.075 3.456c-2.244-2.113-5.763-3.456-9.8-3.456-6.939 0-12.375 3.953-12.375 9 0 5.046 5.436 8.999 12.375 8.999 4.037 0 7.556-1.343 9.8-3.456a8.98 8.98 0 0 0 7.075 3.456 2.25 2.25 0 0 0 0-4.499 4.506 4.506 0 0 1-4.5-4.5 4.506 4.506 0 0 1 4.5-4.501zm-16.875 9.001c-4.641 0-7.875-2.373-7.875-4.5 0-2.128 3.235-4.501 7.875-4.501s7.875 2.373 7.875 4.501c0 2.127-3.234 4.5-7.875 4.5zm57.375-9.001a2.25 2.25 0 0 0 0-4.499 8.971 8.971 0 0 0-7.074 3.456c-2.244-2.113-5.764-3.456-9.801-3.456-6.939 0-12.374 3.953-12.374 9 0 5.046 5.435 8.999 12.374 8.999 4.037 0 7.557-1.343 9.801-3.456a8.974 8.974 0 0 0 7.074 3.456 2.25 2.25 0 0 0 0-4.499c-2.48 0-4.5-2.021-4.5-4.5a4.507 4.507 0 0 1 4.5-4.501zm-16.875 9.001c-4.641 0-7.876-2.373-7.876-4.5 0-2.128 3.235-4.501 7.876-4.501s7.876 2.373 7.876 4.501c0 2.127-3.235 4.5-7.876 4.5z"
                    })
                ]
            });
        case "Agriculture":
        case "Water":
            return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: size,
                height: size,
                viewBox: "0 0 100 100",
                children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                    fill: fill,
                    d: "M93.819 80.971c-4.61.337-8.224-1.933-11.825-4.353-.585-.394-1.835-.483-2.401-.124-6.018 3.829-12.523 5.519-19.499 3.887-2.99-.701-5.785-2.378-8.548-3.841-1.262-.666-2.026-.686-3.278.085-3.022 1.859-6.151 3.669-9.822 3.909-2.08.136-4.173.062-6.262.029-3.878-.057-7.132-1.808-10.234-3.901-1.553-1.049-2.953-1.102-4.531.03-3.808 2.734-8.017 4.38-12.796 4.14-1.909-.093-3.962-2.05-4.116-3.792-.14-1.583 1.694-3.46 3.741-3.824 4.565-.811 8.599-2.383 11.544-6.359 2.098-2.833 6.452-2.249 8.592.595 3.135 4.168 7.327 6.659 12.608 5.702 3.602-.648 6.763-2.681 9.047-5.758 1.831-2.469 5.653-2.886 7.646-.609 2.218 2.531 4.658 4.874 7.856 5.735 2.449.658 5.347.879 7.744.213 3.146-.875 5.764-3.095 7.824-5.807 1.71-2.248 5.62-1.901 7.43.347 2.817 3.507 6.317 5.94 11.013 6.341 1.062.089 2.516.523 2.996 1.293.718 1.156 1.087 2.796.903 4.135-.094.693-1.633 1.365-2.633 1.705-.92.312-1.995.165-2.999.222zM93.819 58.84c-4.61.337-8.224-1.931-11.825-4.351-.585-.396-1.835-.485-2.401-.125-6.018 3.831-12.523 5.519-19.499 3.888-2.99-.701-5.785-2.378-8.548-3.839-1.262-.67-2.026-.687-3.278.083-3.022 1.861-6.151 3.669-9.822 3.909-2.08.136-4.173.062-6.262.031-3.878-.059-7.132-1.81-10.234-3.903-1.553-1.047-2.953-1.102-4.531.03-3.808 2.734-8.017 4.38-12.796 4.141-1.909-.095-3.962-2.051-4.116-3.795-.14-1.582 1.694-3.458 3.741-3.82 4.565-.812 8.599-2.385 11.544-6.361 2.098-2.835 6.452-2.248 8.592.596 3.135 4.165 7.327 6.658 12.608 5.701 3.602-.65 6.763-2.681 9.047-5.756 1.831-2.471 5.653-2.888 7.646-.61 2.218 2.532 4.658 4.873 7.856 5.732 2.449.66 5.347.881 7.744.215 3.146-.875 5.764-3.097 7.824-5.805 1.71-2.251 5.62-1.904 7.43.344 2.817 3.507 6.317 5.942 11.013 6.34 1.062.09 2.516.523 2.996 1.294.718 1.155 1.087 2.795.903 4.135-.094.693-1.633 1.365-2.633 1.705-.92.314-1.995.166-2.999.221zM93.819 35.961c-4.61.338-8.224-1.929-11.825-4.35-.585-.395-1.835-.484-2.401-.125-6.018 3.831-12.523 5.519-19.499 3.886-2.99-.7-5.785-2.377-8.548-3.839-1.262-.669-2.026-.686-3.278.084-3.022 1.862-6.151 3.668-9.822 3.909-2.08.137-4.173.062-6.262.03-3.878-.056-7.132-1.809-10.234-3.901-1.553-1.048-2.953-1.102-4.531.03-3.808 2.734-8.017 4.379-12.796 4.14C2.714 35.73.661 33.774.507 32.032c-.14-1.582 1.694-3.459 3.741-3.822 4.565-.812 8.599-2.384 11.544-6.361 2.098-2.833 6.452-2.25 8.592.596 3.135 4.167 7.327 6.659 12.608 5.703 3.602-.652 6.763-2.681 9.047-5.758 1.831-2.469 5.653-2.887 7.646-.61 2.218 2.532 4.658 4.873 7.856 5.734 2.449.658 5.347.879 7.744.215 3.146-.875 5.764-3.099 7.824-5.807 1.71-2.251 5.62-1.904 7.43.346 2.817 3.507 6.317 5.942 11.013 6.338 1.062.09 2.516.524 2.996 1.295.718 1.155 1.087 2.795.903 4.133-.092.696-1.631 1.366-2.631 1.706-.922.314-1.997.166-3.001.221z"
                })
            });
        case "Government":
            return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: size,
                height: size,
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                    fill: fill,
                    d: "M23.5 23H.5a.5.5 0 0 0 0 1h23a.5.5 0 0 0 0-1zM.5 22h23a.5.5 0 0 0 0-1H22v-1.5a.5.5 0 0 0-.5-.5H21V9h1.5a.5.5 0 0 0 .5-.5V6.599c.007-.033.02-.064.02-.099 0-.06-.033-.106-.052-.159-.005-.017-.009-.034-.016-.049a.495.495 0 0 0-.239-.24c-.014-.006-.021-.022-.037-.027L12.248.066a.499.499 0 0 0-.496 0l-10.5 6c-.025.014-.044.035-.065.053-.017.014-.035.025-.049.04a.486.486 0 0 0-.091.135l-.008.013a.503.503 0 0 0-.036.177c0 .006-.003.011-.003.016v2a.5.5 0 0 0 .5.5H3v10h-.5a.5.5 0 0 0-.5.5V21H.5a.5.5 0 0 0 0 1zM20 19h-1V9h1v10zm-4 0V9h2v10h-2zm-2 0V9h1v10h-1zm-3 0V9h2v10h-2zm-2 0V9h1v10H9zm-3 0V9h2v10H6zm6-17.924L20.617 6H3.383L12 1.076zM2 7h20v1H2V7zm2 2h1v10H4V9zM3 20h18v1H3v-1z"
                })
            });
        case "City Planning":
        default:
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: size,
                height: size,
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M7.5 20a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1h5zM2.5 18h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM2.5 14h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM2.5 16h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM6.5 5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM2.5 10h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM2.5 12h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zM18.5 18h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM18.5 16h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM18.5 12h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM18.5 14h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM11.5 18h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM18.5 20h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1z"
                    }),
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M23.5 9H23V6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V9h-.5a.5.5 0 0 0-.5.5V13h-6V7.5a.5.5 0 0 0-.5-.5H9V3.5a.5.5 0 0 0-.5-.5H5V.5a.5.5 0 0 0-1 0V3H1.5a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-14a.5.5 0 0 0-.5-.5zM2 4h6v3H2V4zM1 8h8v15H6v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V23H1V8zm3 15v-1h1v1H4zm12 0h-6v-9h6v9zm2-16h4v2h-4V7zm2 16v-1h1v1h-1zm3 0h-1v-1.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V23h-2V10h6v13z"
                    }),
                    /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M11.5 16h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zM14.5 19h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
                    })
                ]
            });
    }
}
$a4de17e3b28de8f4$var$TopicIcon.defaultProps = {
    title: "City Planning",
    size: 24,
    fill: ""
};
$a4de17e3b28de8f4$var$TopicIcon.propTypes = {
    title: (0, $hgUW1$proptypes).string,
    size: (0, $hgUW1$proptypes).oneOfType([
        (0, $hgUW1$proptypes).number,
        (0, $hgUW1$proptypes).string
    ]),
    fill: (0, $hgUW1$proptypes).string
};
var $a4de17e3b28de8f4$export$2e2bcd8739ae039 = $a4de17e3b28de8f4$var$TopicIcon;


function $d7569e22dd161fbc$var$IconListItem({ image: image, link: link, title: title, size: size, color: color, identifier: identifier }) {
    let content = "";
    if (image) // Image provided as a url.
    content = /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Link), {
        to: link,
        className: "dc-icon-link",
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("img", {
                src: image,
                alt: title
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                children: title
            })
        ]
    });
    else // Image provided by custom component.
    content = /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Link), {
        to: link,
        className: "dc-icon-link",
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $a4de17e3b28de8f4$export$2e2bcd8739ae039), {
                title: title,
                size: size,
                fill: color
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                children: title
            })
        ]
    });
    return /*#__PURE__*/ (0, $hgUW1$jsx)("li", {
        children: content
    }, identifier);
}
$d7569e22dd161fbc$var$IconListItem.defaultProps = {
    link: "",
    image: "",
    size: "",
    color: "",
    identifier: ""
};
$d7569e22dd161fbc$var$IconListItem.propTypes = {
    title: (0, $hgUW1$proptypes).string.isRequired,
    link: (0, $hgUW1$proptypes).string,
    image: (0, $hgUW1$proptypes).string,
    size: (0, $hgUW1$proptypes).string,
    color: (0, $hgUW1$proptypes).string,
    identifier: (0, $hgUW1$proptypes).string
};
var $d7569e22dd161fbc$export$2e2bcd8739ae039 = $d7569e22dd161fbc$var$IconListItem;








// Icons made by Freepik https://www.flaticon.com/authors/freepik
class $7e413a60cdf9bca9$var$FormatIcon extends (0, $hgUW1$react).PureComponent {
    render() {
        const { format: format, height: height, width: width, fill: fill } = this.props;
        switch(format){
            case "api":
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "API",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M99.979 36.442a1.963 1.963 0 00-.475-1.295L79.838 12.682c-.006-.005-.012-.008-.016-.013a1.978 1.978 0 00-.529-.412 2.011 2.011 0 00-.395-.165c-.037-.011-.07-.027-.107-.035a1.95 1.95 0 00-.459-.057H30c-2.207 0-4 1.794-4 4v94c0 2.205 1.793 4 4 4h66c2.205 0 4-1.795 4-4V36.666c0-.075-.012-.149-.021-.224zm-47.874 70.181l-1.872-6.229h-6.947l-1.729 6.229H35.87l7.416-24.262h7.199l7.523 24.262h-5.903zM30 79.916V16h46.332v20.465a2 2 0 002 2H96v41.451H30zm16.707 6.549h-.072c-.359 1.439-.721 3.275-1.115 4.68l-1.441 5.146h5.363l-1.512-5.146c-.432-1.44-.864-3.241-1.223-4.68zm32.851-21.403c-1.943 1.081-3.89 2.158-5.83 3.244-4.365 2.443-8.727 4.893-13.091 7.337-.104.058-.216.102-.389.182v-.493c0-5.408.003-10.817-.007-16.226 0-.321.081-.52.37-.698 6.211-3.833 12.413-7.678 18.618-11.52.104-.065.219-.115.328-.172l.001 18.346zM56.367 75.676c-.195-.099-.317-.155-.435-.22-6.1-3.417-12.196-6.838-18.302-10.243-.396-.221-.557-.447-.551-.924.051-4.494.072-8.989.098-13.484.007-1.187.001-2.375.001-3.67.243.126.375.187.498.26 6.097 3.615 12.193 7.234 18.295 10.841.303.179.404.371.403.719-.012 5.394-.008 10.787-.008 16.182l.001.539zm18.061-35.052c1.552.877 3.025 1.712 4.563 2.583-.181.112-.303.193-.429.266-6.591 3.811-13.185 7.619-19.774 11.433-.206.119-.363.163-.598.028-6.694-3.854-13.395-7.698-20.093-11.544-.035-.02-.067-.045-.169-.115l4.247-2.485c0 .596-.026 1.127.013 1.653.017.219.121.484.277.631 1.108 1.044 2.485 1.526 3.955 1.74 1.878.273 3.73.128 5.474-.672.578-.266 1.082-.699 1.61-1.07.093-.065.194-.198.196-.3.015-.959.008-1.918.008-2.939-.646.729-1.436 1.167-2.319 1.418-2.655.756-5.261.695-7.779-.54a5.474 5.474 0 01-.638-.387c-.827-.559-.881-1.455-.134-2.125.623-.559 1.371-.874 2.166-1.082a11.38 11.38 0 013.73-.367c.189.014.408-.064.579-.161.926-.524 1.841-1.068 2.761-1.604.081-.047.168-.084.305-.153 0 .726.016 1.408-.007 2.089a.742.742 0 00.275.644c1.083.956 2.372 1.463 3.771 1.68 1.9.295 3.771.17 5.568-.585a7.01 7.01 0 00.666-.333c.761-.424 1.4-.906 1.284-1.942-.057-.515.034-1.046.061-1.619.112.046.211.074.298.124.819.462 1.653.898 2.445 1.401.53.336 1.069.436 1.685.407 1.419-.067 2.817.094 4.139.649.45.19.892.446 1.275.75.829.656.805 1.456-.012 2.108-.892.711-1.946 1.043-3.039 1.234-1.864.327-3.722.26-5.507-.41-.688-.259-1.315-.686-1.967-1.042-.118-.064-.221-.157-.406-.292-.025.21-.051.348-.056.487-.024.732-.059 1.465-.052 2.197a.83.83 0 00.233.528c1.015.964 2.262 1.464 3.614 1.712 2.252.411 4.424.198 6.471-.888.11-.058.211-.132.319-.195.676-.393 1.062-.919.932-1.759-.051-.344.032-.711.059-1.153zM52.69 45.651c-.021.69.036 1.277-.068 1.834-.22 1.162.409 1.765 1.313 2.234l.146.077c2.177 1.102 4.458 1.257 6.805.719 1.144-.262 2.211-.702 3.054-1.559a.723.723 0 00.201-.423c.044-.8.062-1.601.086-2.402.004-.126-.016-.253-.027-.436-1.645 1.591-3.643 1.896-5.72 1.901-2.091.005-4.04-.492-5.79-1.945zm6.38-9.475c-2.123.059-3.911-.198-5.529-1.161-.353-.209-.703-.512-.905-.858-.273-.473-.042-1.028.453-1.458.789-.685 1.741-1.013 2.737-1.201 2.106-.397 4.204-.375 6.237.392.495.187.971.472 1.394.793.778.594.773 1.377.036 2.013-.843.726-1.863 1.066-2.927 1.278-.58.115-1.173.16-1.496.202zm10.428 50.176c-1.143 0-1.916.111-2.32.223V93.9c.479.11 1.068.146 1.877.146 2.982 0 4.824-1.51 4.824-4.051-.001-2.281-1.585-3.643-4.381-3.643zm7.658 9.39c-1.914 1.804-4.75 2.613-8.064 2.613a14.43 14.43 0 01-1.914-.109v8.873h-5.561V82.633c1.73-.294 4.162-.516 7.586-.516 3.461 0 5.928.662 7.584 1.988 1.584 1.251 2.652 3.313 2.652 5.743 0 2.433-.811 4.494-2.283 5.894zm11.487 11.375h-5.636V82.302h5.636v24.815z"
                    })
                });
            case "bin":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "BIN",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M50.574 90.934c0-1.728-1.321-2.643-3.658-2.643-1.118 0-1.762.068-2.202.136v5.318h1.694c2.71 0 4.166-1.118 4.166-2.811zM46.476 97.438h-1.762v6.437c.508.067 1.118.067 1.999.067 2.337 0 4.403-.881 4.403-3.286 0-2.303-2.066-3.218-4.64-3.218z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.98 36.446a1.977 1.977 0 00-.475-1.295L79.838 12.687c-.004-.006-.01-.008-.016-.014a2 2 0 00-.527-.412 2.129 2.129 0 00-.395-.165c-.037-.011-.07-.026-.107-.036a2.017 2.017 0 00-.459-.057H30c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V36.67c0-.075-.012-.149-.02-.224zm-45.815 69.257c-1.66 1.321-4.438 2.066-8.977 2.066-2.541 0-4.438-.17-5.589-.339V85.006c1.355-.271 4.099-.475 6.673-.475 3.15 0 5.081.305 6.741 1.287 1.592.848 2.744 2.405 2.744 4.472 0 2.032-1.186 3.93-3.76 4.878v.067c2.608.712 4.539 2.677 4.539 5.624 0 2.067-.948 3.692-2.371 4.844zm11.08 1.829h-5.183V84.701h5.183v22.831zm23.374 0h-5.42l-4.878-8.808c-1.355-2.438-2.846-5.386-3.963-8.062l-.102.033c.135 3.015.203 6.233.203 9.959v6.877h-4.742v-22.83h6.03l4.742 8.366a66.181 66.181 0 013.726 7.825h.102c-.338-3.015-.44-6.098-.44-9.519V84.7h4.742v22.832zM30 79.92V16.003h46.334v20.466a2 2 0 002 2H96l.002 41.451H30z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsxs)("g", {
                            children: [
                                /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                                    fill: fill,
                                    d: "M48.153 48.822a7.97 7.97 0 0114.159-5.017h13.416C73.493 35.05 65.578 28.57 56.124 28.57c-11.187 0-20.257 9.065-20.257 20.252 0 11.189 9.07 20.26 20.257 20.26.219 0 .432-.025.649-.033V56.762a7.77 7.77 0 01-.65.033 7.97 7.97 0 01-7.97-7.973zm14.071-17.779l-4.401 8.981c-.855-.331-1.698-.154-1.698-.154l-2.546-9.432s3.375-1.513 8.645.605z"
                                }),
                                /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                                    fill: fill,
                                    d: "M49.772 48.825a6.362 6.362 0 016.353-6.355c1.462 0 2.808.502 3.883 1.336h.891a6.905 6.905 0 00-4.774-1.918c-3.823 0-6.934 3.112-6.934 6.938 0 3.824 3.111 6.935 6.934 6.935.219 0 .435-.013.649-.033v-.58a6.363 6.363 0 01-7.002-6.323z"
                                }),
                                /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                                    fill: fill,
                                    d: "M52.87 48.822a3.258 3.258 0 003.903 3.191v-.604a2.626 2.626 0 01-.649.089 2.677 2.677 0 01-2.673-2.675 2.676 2.676 0 012.673-2.673c.225 0 .44.036.649.089v-.605a3.255 3.255 0 00-3.903 3.188zM58.485 45.317v25.286h26.712V45.317H58.485zM82.75 64.486h-.978c-.931-2.357-2.07-4.826-3.665-4.418-1.493.381-2.488 2.817-2.99 4.418h-.734c-.546-1.956-1.775-5.49-3.981-7.697-2.498-2.498-4.935 4.563-5.863 7.697h-3.606V47.765H82.75v16.721z"
                                }),
                                /*#__PURE__*/ (0, $hgUW1$jsx)("circle", {
                                    fill: fill,
                                    cx: "64.145",
                                    cy: "51.988",
                                    r: "1.969"
                                }),
                                /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                                    fill: fill,
                                    d: "M76.09 55.224c.398 0 .771-.041 1.102-.108.385.165.854.264 1.363.264 1.301 0 2.357-.636 2.357-1.422s-1.057-1.424-2.357-1.424c-.49 0-.942.092-1.32.244a.845.845 0 00-.593-.244h-.341a.844.844 0 00-.834.758c-1.057.108-1.839.489-1.839.946 0 .543 1.102.986 2.462.986z"
                                })
                            ]
                        })
                    ]
                });
            case "csv":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "CSV",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.979 36.443a1.968 1.968 0 0 0-.475-1.295L79.838 12.683c-.006-.006-.012-.008-.016-.014a2.046 2.046 0 0 0-.924-.576c-.037-.012-.07-.027-.107-.037a2.002 2.002 0 0 0-.459-.056H30c-2.207 0-4 1.795-4 4v94c0 2.205 1.793 4 4 4h66c2.205 0 4-1.795 4-4V36.667c0-.076-.012-.15-.021-.224zm-54.442 67.348c1.654 0 3.49-.359 4.57-.791l.828 4.283c-1.008.504-3.275 1.045-6.227 1.045-8.387 0-12.707-5.221-12.707-12.131 0-8.279 5.904-12.887 13.246-12.887 2.844 0 5.004.576 5.977 1.08l-1.117 4.355c-1.115-.467-2.664-.898-4.607-.898-4.355 0-7.738 2.627-7.738 8.025 0 4.86 2.879 7.919 7.775 7.919zm14.94 4.537c-2.771 0-5.508-.721-6.875-1.477l1.115-4.535c1.477.756 3.744 1.512 6.084 1.512 2.52 0 3.852-1.045 3.852-2.629 0-1.512-1.152-2.375-4.068-3.418-4.031-1.404-6.658-3.635-6.658-7.162 0-4.141 3.455-7.309 9.178-7.309 2.736 0 4.752.576 6.191 1.225l-1.223 4.428a11.52 11.52 0 0 0-5.076-1.152c-2.375 0-3.527 1.08-3.527 2.34 0 1.549 1.367 2.232 4.5 3.42 4.283 1.584 6.299 3.814 6.299 7.234-.001 4.066-3.132 7.523-9.792 7.523zm25.63-.362h-6.406l-7.775-24.26h6.012l2.951 10.26c.828 2.879 1.584 5.65 2.16 8.674h.107a105.908 105.908 0 0 1 2.195-8.566l3.096-10.367h5.832l-8.172 24.259zM30 79.917V16h46.332v20.467a2 2 0 0 0 2 2H96v41.451H30z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M81.85 43.492H44.885V65.568h36.987V48.404h-.022v-4.912zm-24.715 21.65H45.313v-4.986h11.822v4.986zm0-5.412H45.313v-4.986h11.822v4.986zm0-5.414H45.313v-4.984h11.822v4.984zm.215-5.412V43.92h11.822v4.984H57.35zm24.021 16.164h-4.668V50.791h-3.205v14.277h-2.67v-11.32h-3.205v11.32h-2.352v-8.4h-3.205v8.4h-4.504V49.332h23.809v15.736zm.051-16.664h-.051v.5H69.6V43.92h11.822v4.484z"
                        }),
                        "..."
                    ]
                });
            case "doc":
            case "docx":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "DOC",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M64.037 88.588c-3.441 0-5.447 3.275-5.447 7.652 0 4.412 2.072 7.52 5.48 7.52 3.443 0 5.414-3.275 5.414-7.653 0-4.044-1.937-7.519-5.447-7.519zM38.402 88.654c-1.137 0-1.873.1-2.307.2v14.738c.434.101 1.137.101 1.771.101 4.611.033 7.619-2.507 7.619-7.887.035-4.679-2.706-7.152-7.083-7.152z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.98 36.443a1.977 1.977 0 00-.475-1.295L79.838 12.684c-.004-.006-.01-.008-.016-.014a2 2 0 00-.527-.412 2.129 2.129 0 00-.395-.165c-.037-.011-.07-.026-.107-.036a1.962 1.962 0 00-.459-.057H30c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V36.667c0-.075-.012-.149-.02-.224zm-52.822 68.319c-2.373 1.973-5.982 2.908-10.395 2.908-2.641 0-4.512-.168-5.781-.334V85.213c1.871-.301 4.311-.469 6.885-.469 4.277 0 7.051.77 9.223 2.406 2.34 1.738 3.811 4.512 3.811 8.488-.001 4.312-1.571 7.286-3.743 9.124zm16.645 3.042c-6.684 0-10.594-5.046-10.594-11.463 0-6.751 4.311-11.797 10.961-11.797 6.918 0 10.695 5.18 10.695 11.396 0 7.386-4.478 11.864-11.062 11.864zm25.935-4.244c1.537 0 3.242-.335 4.244-.735l.77 3.977c-.936.469-3.041.969-5.781.969-7.787 0-11.797-4.846-11.797-11.262 0-7.686 5.48-11.964 12.297-11.964 2.641 0 4.646.534 5.549 1.003l-1.037 4.043c-1.035-.434-2.473-.836-4.277-.836-4.043 0-7.186 2.44-7.186 7.453 0 4.511 2.673 7.352 7.218 7.352zM30 79.917V16h46.334v20.466a2 2 0 002 2H96l.002 41.451H30z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M57.93 39.611h14.555a1.325 1.325 0 000-2.65H57.93c-.732 0-1.323.593-1.323 1.325a1.322 1.322 0 001.323 1.325zM79.604 47.56H43.396a1.326 1.326 0 100 2.649h36.207a1.324 1.324 0 10.001-2.649zM47.18 42.265l1.227-4.988c.314-1.211.52-2.234.709-3.367h.031c.125 1.148.314 2.156.581 3.367l1.103 4.988h2.078l2.846-10.605h-1.967l-1.101 4.799c-.283 1.291-.536 2.501-.724 3.667h-.033a49.297 49.297 0 00-.644-3.588l-1.054-4.877h-2.03l-1.147 4.799c-.301 1.337-.602 2.597-.773 3.713h-.029a94.457 94.457 0 00-.694-3.698l-1.007-4.814H42.49l2.597 10.605h2.093zM79.604 58.083H43.396a1.326 1.326 0 100 2.65h36.207a1.325 1.325 0 10.001-2.65zM79.604 68.858H43.396a1.326 1.326 0 100 2.65h36.207a1.325 1.325 0 10.001-2.65z"
                        })
                    ]
                });
            case "esri rest":
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "ESRI",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M100.14 36.408v73.449a4.01 4.01 0 01-4.006 4.011H30.025a4.014 4.014 0 01-4.004-4.011V15.706a4.013 4.013 0 014.004-4.005h48.414c.157 0 .309.025.46.059.038.01.068.023.106.034.139.039.271.097.396.166a1.946 1.946 0 01.543.426l19.7 22.503c.322.366.47.826.475 1.296.011.072.021.145.021.223zm-4.006 1.8H78.439a2.005 2.005 0 01-2.006-2V15.706H30.025v64.02h66.108V38.208zM45.21 105.519l.748-4.229h-9.184l.5-2.846h7.473l.746-4.229h-7.477l.458-2.596h8.835l.745-4.233H33.281l-3.195 18.133H45.21m20.245-12.867c.132-3.174-1.706-5.742-6.739-5.742-4.531 0-8.194 1.939-8.872 5.791-1.222 6.927 9.529 5.039 9.046 7.784-.149.854-1.218 1.333-2.707 1.333-.574 0-1.18-.149-1.602-.452-.451-.304-.717-.783-.73-1.439h-5.689c-.449 3.276 2.181 6.073 6.959 6.073 4.985 0 8.846-2.039 9.583-6.247 1.166-6.595-9.553-4.911-9.074-7.627.118-.657.762-1.038 2.07-1.038.579 0 1.088.105 1.477.33.39.227.65.603.639 1.234h5.639m9.472 6.547c2.77 0 3.034.782 2.616 3.149-.284 1.612-.338 2.771-.26 3.17h6.019l.099-.55c-.705 0-.486-.804-.071-3.177.646-3.65-.437-4.104-2.222-4.808 2.215-.581 3.456-2.344 3.824-4.433.624-3.525-1.076-5.166-7.116-5.166h-8.56l-3.195 18.133h5.935l1.122-6.319h1.809m-.48-7.579h2.771c1.385 0 2.285.604 2.061 1.888-.228 1.261-1.286 1.714-3.123 1.714h-2.345l.636-3.602zm17.517 13.9l3.195-18.133h-5.943l-3.192 18.133h5.94m-28.93-65.924c.122.206.29.374.465.536l.174.169c.155.167.211.339.211.573 0 1.108.256 2.379.607 3.407.116.338.433.487.769.489.742.001 1.459-.353 2.221-.353 1.381 0 3.593.686 4.29 1.363l.782-.584c-.387-.961-.581-1.326-.788-1.689-1.238-2.171-1.953-4.541-4.724-5.27-1.391-.367-2.842-.121-4.253-.065l.002.475c0 .386.088.692.244.949m2.294-4.991l-.117-.07c-1.636-.936-2.482.542-3.291 1.718h4.122l-.336-.476.465-.185s-.194-.606-.269-.823l-.258-.092a2.532 2.532 0 00-.316-.072m-9.823.583c.229-.04.477-.109.745-.137 2.31-.231 2.93 2.676 4.804 1.311.964-.683.876-.522.757-1.787-1.065-.498-2.411-.994-3.576-1.128-2.282-.251-3.544-.16-5.568.813 1.006.672 1.545 1.149 2.838.928m-4.815-.853c-.312.126-.58.219-.916.284.28.973.625 1.874.831 2.868l.9-.075c.006-.373.037-.601.336-.801.392-.26.639-.574.393-1.44-.201-.698-.529-1.202-1.315-.924l-.229.088m-2.261 2.543c-.142-.142-.385-.389-.188-1.653l-.754-.269c-.239.471-.299.93-.23 1.443l.064.397c.197 1.09.021 1.331-.294 2.295.249-.065 1.192-.323 1.475-.292.375.042.502-.098.751-.335-.093-.958-.257-1.02-.824-1.586m8.971 3.115c-1.176 1.275-1.475 1.612-1.68 3.545.585.887 1.689.838 2.59.551l.38-.129c.902-.306 1.113-.214 1.118.85 0 .513.494.681.895.76l.405.076c.391.078.625.253 1.039.451-.208-1.852-.337-2.075-1.344-3.61-.943-1.439-1.423-2.883-1.849-4.534-.495.707-.967 1.405-1.554 2.04m-7.625 4.027a.558.558 0 01.088-.118l.129-.108.192-.151c.353-.289.637-.688.637-1.509a.522.522 0 00-.508-.507c-3.427-.028-3.867.903-6.352 2.733-.762.562-.095 1.449.057 2.106.523 2.29 2.02 3.769 4.308 1.989.652-.505.939-1.387 1.284-1.741 1.995.657 2.188-.48 1.329-1.395-.392-.42-.832-.829-1.164-1.299m-8.989 4.209l-.301.363c-.309.372-.609.848-.24 1.305.452.557 2.026.622 2.678.697l-.433-.921c-.196-.531-.175-1.606-.243-2.145l-.984-.098c-.099.287-.275.548-.477.799m3.091 7.643c-1.818 2.353.486 2.764 2.24 3.414a13.413 13.413 0 01-.711-1.605l-.2-.598c-.244-.746-.434-1.167-.875-1.81l-.454.599m11.042.614c-.348-.168-1.106-.465-1.106-.92 0-.67.593-1.677.758-2.442.282-1.295-1.339-1.709-2.517-2.128-1.609-.574-3.001-.308-3.661-.032-1.137.473-.632.935-.835 1.764a1.267 1.267 0 01-.087.238l-.136.263c-.68 1.251-.197 2.311.467 3.512.544.979 1.476-.046 2.688 2.384l4.429-2.639m1.885-3.476c.845-1.131.303-1.845-.991-2.137-.458-.104-.762.183-.685.646l.067.416c.107.583.343.985.914 1.25.201.094.562.003.695-.175m3.494-4.163c-.874.803-1.722 1.997-.924 3.306.439.735 2.207 1.377 3.694 1.635 1.467.254 2.653.132 3.105-.624l-1.004-3.045-1.671-3a7.56 7.56 0 00-3.2 1.728m6.888-.811c.007.053.021.101.021.135 0 .709.774 1.257.915 2.042.123.72.327 2.269 1.235 2.489.198.052.408.139.634.238l.748.347c.779.36 1.851.756 2.495-.089.214-.306.236-.274.684-.274h.761l-.345-.68c-.639-1.264-.185-3.325-1.423-4.333-.956-.812-3.431-.917-4.65-.917-.689-.001-1.163.341-1.075 1.042m10.006 1.963c-1.301-1.555-3.195 2.915-.721 2.814.232-.009.415-.095.514-.573l.315-1.851c.054.134.006-.254-.108-.39m-1.971-5.747c1.172-1.23-.131-3.033-2.258-3.289l-.771-.118c.303 1.87.886 3.734 2.04 5.266l.336-.052c1.388-.193 1.108-.799.653-1.807m-4.48 14.058c-.04 1.129-.368 2.273-.649 3.359 1.054-.175 1.69-.294 2.346-1.256.386-.57 1.027-1.775.968-2.476l-.024-.229c-.065-.475.064-.558.311-.958-1.028-.74-1.918-1.282-3.261-1.282l-1.193-.064c1.008.98 1.557 1.367 1.502 2.906m-4.423-2.498c-.825.181-2.413-.669-1.989.786.057.193.171.465.306.751l.365.757.146.309c.088.768.502 1.545.982 2.128.593.719 1.269 1.311 2.156.822l.007-.36c0-1.362.311-2.375-.489-3.633l-.021-.154-.036-.487c-.025-.402-.085-1.138-.644-1.138a.827.827 0 00-.26.047l-.167.06a2.417 2.417 0 01-.356.112m1.452 7.744c-.599.345-1.195 1.133-1.195 2.075l-.057.7c.439-.127.85-.224 1.298-.208l.28.015c1.022.05 1.312-.565 1.363-1.514.09-1.31-.98-1.479-1.689-1.068m-10.619 2.628c-.433.313-.835.67-1.27.989l.483.468c1.388 1.348 6.569.244 8.213.147l-.035-1.136c-2.063 0-2.92.182-4.197.064l-.136-.081c-.54-.355-1.048-.934-1.747-.934-.541.001-.987.253-1.311.483m-8.2-.839c1.016.73 3.746 2.947 4.836.827l.491-.837-5.327.01m6.842-3.99c.02-.755.077-1.516.077-2.125l.001-.757c-1.009.327-3.232 1.424-3.965 2.132-1.157 1.119 2.157 3.337 3.517 3.322l.61.038c-.216-.893-.265-1.682-.24-2.61m.804 7.514c-.55-.428-1.133-.712-1.686-1.134-.246.263-.453.401-.678.694.787.188 1.577.336 2.364.44m-2.879-1.957a74.17 74.17 0 01-4.168-3.485c-.179-.16-.52-.589-.956-1.214-.677.333-1.372.597-2.05.724-.266.049-.452.063-.566.085-.308.06-.438-.259-.175-.434.75-.492 1.424-.944 2.106-1.402-1.281-1.998-2.967-5.017-4.034-7.95-.597.591-1.152 1.256-1.659 1.795-.152.163-.527.604-.781.316-.377-.427 1.273-2.111 1.429-2.262.193-.233.437-.466.717-.701a18.61 18.61 0 01-.256-.862c-.708-2.577-1.089-3.442-1.327-3.963a5.472 5.472 0 01-.414-1.439c-.44.255-.871.629-1.069.765-.281.079-.442-.029-.523-.042-.283 3.023-.093 6.724.81 9.731 1.844 6.132 6.682 9.801 11.965 11.449.039-.123.107-.256.206-.395.204-.288.384-.421.745-.716M41.494 44.583c.011-.889.106-1.783.146-2.633l.044-.943a21 21 0 00-.692 1.366c-.462 1.002-.806 2.538-.984 4.324.047-.048.119-.108.215-.179a8.539 8.539 0 011.271-1.935m.326-5.752a.445.445 0 01.198-.259c1.864-2.403 4.633-4.92 8.037-6.633l.129-.405a2.442 2.442 0 00-.011-.387l-.044-.383c-.027-.288.03-.61.419-.595.187-.012.293.125.328.252.073.288-.145.952-.222 1.205 3.062-1.398 6.605-2.158 10.44-1.627.075.011.197.235-.036.238l-.542.014c-2.425.094-4.938.582-7.229 1.356-.982.333-2.002.745-3.027 1.259-.351 1.101-.684 2.241-.617 2.838.13 1.156.797 2.156 1.34 3.193.386-.141.769-.289 1.144-.454 2.175-.709 4.631-1.363 6.448-1.739a1.647 1.647 0 01-.085-.29c-.113-.719-1.893-2.245-2.309-2.605l-.625-.542-.166-.148c-.231-.219-.253-.353-.253-.37-.009-.827.584-.914.897-.832.743-.218 2.01-.403 3.778-.354 7.476-.324 14.381 3.86 16.985 8.659 6.604 10.391.002 24.728-8.644 28.547-3.698 1.634-6.87 2.34-12.714 1.527-5.857-.813-10.646-3.664-14.364-9.653-4.58-7.38-1.994-16.322-1.35-18.126.388-1.08 1.101-2.36 2.095-3.686m1.089.234c-.099.777-.036 2.268.163 3.985.794-.665 1.757-1.356 2.924-2.112 1.329-.859 2.843-1.308 4.329-1.812a6.414 6.414 0 00-.224-.417l-.404-.686c-.942-1.643-.754-3.146-.145-4.788-2.375 1.297-4.732 3.159-6.643 5.83m.401 5.738c.369 2.387.952 4.894 1.675 6.419l.061.127c2.477-1.53 6.035-2.943 7.911-3.55-.832-2.385-1.825-5.417-2.204-7.304-1.256.548-2.482.868-3.685 1.392-1.277.557-2.524 1.343-3.758 2.916m2.073 7.256a194.76 194.76 0 004.106 8.072c.883-.584 1.869-1.221 3.094-1.985a27.974 27.974 0 013.923-2.027c-.922-1.692-1.792-3.486-2.464-5.296-.161-.437-.407-1.106-.693-1.908-2.439.967-2.779.596-7.889 3.107l-.077.037zm4.728 9.279c1.036 1.945 2.863 3.396 4.676 4.75 1.685-1.109 3.98-2.1 5.777-2.712-.57-.922-1.482-2.595-2.451-4.477-.288-.477-.58-.966-.869-1.467-2.174.779-4.17 1.731-5.682 2.879a22.68 22.68 0 01-1.451 1.027m5.705 5.533c.972.693 1.805 1.37 2.686 2.056l.155.123c1.549.064 3.059-.03 4.457-.274-.292-.742-.586-2.197-.639-2.395-.393-.859-.891-1.728-1.442-2.328-2.016.574-3.702 1.467-5.217 2.818m7.968 1.775c.924-.2 1.796-.466 2.591-.797a25.42 25.42 0 001.943-.906l.013-.222.054-.98c.044-.821.111-1.972.146-3.209-1.956.068-3.892.491-5.762 1.115-.329.061-.654.13-.976.208.523.855.904 1.546 1.032 1.998l.1.364c.075.166.729 1.582.859 2.429m5.803-2.424c1.58-.979 2.801-2.006 3.875-3.358a21.218 21.218 0 00-3.656-.368h-.146c-.026 1.28-.014 2.517-.073 3.726m4.325-3.923c.516-.681 1.093-1.695 1.529-2.625-.025-.281.011-.599.016-.722.039-.863.147-1.801.15-2.703-2.158-.834-4.104-1.516-6.274-1.479.218 1.286.335 2.662.357 4.201.085.79.092 1.502-.003 2.086l.006.829a12.485 12.485 0 014.203.405l.016.008zm2.516-5.146l.042-.132.193-.632-.331.018c.036.25.068.5.096.746M71.28 37.217c-3.816-3.097-9.619-5.627-14.632-4.904.667.616 1.544 1.717 1.959 2.22.1.112.184.21.273.32.409.271.893.831 1.41 1.555.183-.02.343-.031.477-.036 2.233-.068 4.622.08 6.968.349-.244-.285-.474-.574-.553-.74-.203-.438.286-.53.679-.279.496.316.983.754 1.438 1.217.67.092 1.333.193 1.981.298m4.299 18.281l-.037-.343c-.399-2.917-.718-3.395-1.041-5.904a38.049 38.049 0 00-.208-1.433 3.65 3.65 0 01-.333-.155c-.819-.441-1.43-.798-2.382-1.022-1.124-.265-2.775-.4-5.386-.154 1.417 2.518 2.379 4.723 2.931 7.208 1.667.076 2.729.375 3.613.728 1.158.461 1.847.85 2.843 1.075m-1.731-9.708c-1.294-2.997-3.297-5.774-5.307-8.15-1.989-.172-5.11-.124-7.307.199 1.417 2.289 2.895 5.197 3.685 6.487.275.453.538.891.789 1.32 3.366-.149 6.502.123 8.397 1.166a13.84 13.84 0 00-.257-1.022m-3.645-7.861c1.854 3.126 2.858 4.715 3.506 6.146.235.52.425 1.017.584 1.547.211.491.405.988.575 1.491.683.215 1.802.594 1.965.791.132.158.133.438-.279.432-.342-.003-.865-.096-1.378-.232.369 1.326.581 2.687.581 4.067 0 1.031.227 2.084.396 3.098l.056.341c.195.026.405.046.631.062.279-.931.5-1.863.728-2.781.921-3.751-.811-8.136-2.695-11.639-.539-.994-1.396-2.044-2.482-3.066-.749.028-1.864-.152-2.15-.243l-.038-.014zM57.12 55.866a31.858 31.858 0 018.957-2.095c.386-.031.747-.053 1.092-.07-.948-2.394-2.239-4.644-3.535-6.893-.437.066-.89.141-1.367.225-.581.103-2.368.387-4.185.719-1.645.301-3.277.635-4.077.901l.111.363c.41 1.363 1.651 4.093 3.004 6.85m10.503-.926c-2.919.442-6.537 1.18-9.821 2.298l.734 1.443c1.02 1.681 2.006 3.185 2.78 4.405.345-.054.631-.131.873-.184 2.188-.471 4.25-.843 6.337-.956l.015-.911c.017-.688.02-1.348.011-1.993a19.85 19.85 0 00-.929-4.102m-13.947-7.358c2.345-.677 5.855-1.388 9.399-1.743-.76-1.326-1.503-2.659-2.166-4.03-.065-.135-1.005-2.063-1.696-3.591-2.488.464-5.654.951-7.694 1.917.399 1.778 1.302 4.66 2.157 7.447"
                    })
                });
            case "html":
            case "web page":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "HTML",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.98 36.442a1.99 1.99 0 00-.475-1.295L79.838 12.682c-.004-.005-.01-.008-.016-.013a1.966 1.966 0 00-.527-.412 2.063 2.063 0 00-.395-.165c-.037-.011-.07-.027-.109-.035a1.946 1.946 0 00-.457-.057H30c-2.205 0-4 1.794-4 4v94c0 2.205 1.795 4 4 4h66c2.205 0 4-1.795 4-4V36.666c0-.075-.012-.149-.02-.224zM30 16h46.334v20.465a2 2 0 002 2H96l.002 41.451H30V16zm15.418 88.465H41.41v-7.641h-6.619v7.641H30.76V86.203h4.031v7.018h6.619v-7.018h4.008v18.262zm15.818-14.793h-4.85v14.793h-4.033V89.672h-4.771v-3.469h13.654v3.469zm17.323 14.793l-.264-6.99c-.078-2.195-.158-4.85-.158-7.506h-.078a101.369 101.369 0 01-1.979 7.072l-2.16 7.125h-3.137l-1.898-7.07a85.212 85.212 0 01-1.609-7.127h-.053c-.105 2.467-.186 5.284-.314 7.56l-.318 6.937h-3.717l1.133-18.262h5.352l1.74 6.096c.555 2.113 1.107 4.39 1.504 6.53h.078c.502-2.114 1.107-4.524 1.688-6.557l1.898-6.069h5.246l.975 18.262h-3.929zm18.115 0h-11.1V86.203h4.033v14.793h7.066v3.469z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M40.543 58.127l15.322 7.118v-3.383l-11.588-5.075v-.064l11.588-5.076v-3.383l-15.322 7.118zM58.23 66.522h3.223l6.83-23.142h-3.222zM70.137 51.647l11.843 5.076v.064l-11.843 5.075v3.383l15.32-7.022v-2.937l-15.32-7.022z"
                        })
                    ]
                });
            case "json":
            case "geojson":
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "JSON",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M68.163 107.126c-5.545 0-8.791-4.64-8.791-10.539 0-6.208 3.578-10.849 9.096-10.849 5.74 0 8.872 4.764 8.872 10.479 0 6.792-3.716 10.909-9.177 10.909zm31.816-70.681a1.96 1.96 0 0 0-.475-1.295L79.838 12.686c-.006-.006-.012-.008-.016-.014a1.978 1.978 0 0 0-.529-.412 2.077 2.077 0 0 0-.395-.166c-.037-.01-.07-.025-.107-.035a2.003 2.003 0 0 0-.459-.057H30c-2.207 0-4 1.795-4 4v94c0 2.205 1.793 4 4 4h66c2.205 0 4-1.795 4-4V36.668c0-.074-.012-.148-.021-.223zM96 79.918H30V16.002h46.332v20.465a2 2 0 0 0 2 2H96v41.451zM40.229 99.199c0 6.175-2.67 8.328-6.963 8.328-1.015 0-2.35-.193-3.222-.513l.494-3.955c.61.224 1.393.385 2.262.385 1.857 0 3.019-.933 3.019-4.31V85.501h4.409v13.698zm55.772 7.851H91.46l-4.088-8.18c-1.136-2.266-2.383-5.002-3.32-7.486l-.086.031c.113 2.8.17 5.787.17 9.248v6.387h-3.974V85.848h5.053l3.973 7.771a64.4 64.4 0 0 1 3.122 7.267h.085c-.284-2.8-.368-5.662-.368-8.84V85.85H96v21.201h.001zm-46.942.314c-2.186 0-4.342-.629-5.421-1.289l.879-3.965c1.165.661 2.952 1.321 4.797 1.321 1.987 0 3.038-.912 3.038-2.296 0-1.32-.909-2.077-3.208-2.989-3.178-1.226-5.251-3.177-5.251-6.26 0-3.617 2.726-6.386 7.239-6.386 2.157 0 3.746.503 4.882 1.068l-.964 3.869a8.397 8.397 0 0 0-4.002-1.006c-1.873 0-2.783.943-2.783 2.045 0 1.352 1.079 1.949 3.549 2.988 3.378 1.384 4.967 3.334 4.967 6.322-.001 3.558-2.471 6.578-7.722 6.578zm19.297-17.907c-2.856 0-4.521 3.012-4.521 7.038 0 4.056 1.72 6.913 4.549 6.913 2.854 0 4.49-3.012 4.49-7.037.001-3.719-1.605-6.914-4.518-6.914zM41.162 57.382c-.301-4.876.751-7.929 1.688-9.632 1.316-2.396 3.266-4.315 5.5-5.536 1.684-1.035 3.556-1.595 5.487-1.595 1.131 0 2.282.189 3.423.562l.059.022c.17.079.337.162.502.249l.629.206-.129.071a11.59 11.59 0 0 1 4.269 4.362c1.119 1.995 1.707 4.336 1.699 6.771-.008 2.468-.62 4.855-1.77 6.901-.974 1.733-2.301 3.146-3.886 4.148a10.7 10.7 0 0 0 1.467.102c2.666 0 6.429-.991 9.213-5.709 1.629-2.759 2.462-5.738 2.494-8.885a19.236 19.236 0 0 0-.162-2.595c-.379-2.914-1.394-5.901-3.019-8.88-2.175-3.988-5.84-6.607-10.597-7.572l.009-.08a22.394 22.394 0 0 0-16.674 6.588 22.392 22.392 0 0 0-6.602 15.938 22.395 22.395 0 0 0 6.566 15.901 22.423 22.423 0 0 0 9.218 5.611 17.295 17.295 0 0 1-2.826-2.138 17.802 17.802 0 0 1-3.915-5.026c-.17-.304-.338-.618-.502-.943-1.138-2.265-1.939-5.57-2.141-8.841zm10.392 2.094c-1.226-2.119-1.865-4.494-1.848-6.868.03-4.312 2.199-8.122 5.999-10.623a9.622 9.622 0 0 0-1.783-.168c-1.719 0-3.455.469-5.068 1.359-1.714 1.069-3.219 2.685-4.348 4.738-1.253 2.28-1.922 5.5-1.882 9.067.035 3.198.655 6.446 1.659 8.688.152.341.312.667.478.983 1.141 2.028 2.425 3.559 3.652 4.704a16.527 16.527 0 0 0 3.844 2.582c1.079.517 2.773.996 5.036 1.425l-.008.08h.017c6.02 0 11.681-2.345 15.938-6.602s6.602-9.918 6.602-15.938a22.425 22.425 0 0 0-6.336-15.666 22.453 22.453 0 0 0-9.716-5.926c2.435 1.441 4.394 3.471 5.788 6.026 1.688 3.098 2.746 6.213 3.142 9.259.125.96.181 1.908.172 2.842-.02 3.366-.903 6.552-2.646 9.503-3.044 5.158-7.196 6.241-10.145 6.241-1.853 0-3.132-.437-3.186-.455l-.046-.015-.043-.024c-.109-.062-.216-.126-.323-.19l-.87-.302.233-.105a14.09 14.09 0 0 1-4.312-4.615z"
                    })
                });
            case "kml":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "KML",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.874 36.931a1.977 1.977 0 00-.475-1.295L79.731 13.171c-.004-.006-.01-.008-.016-.014a2 2 0 00-.527-.412 2.129 2.129 0 00-.395-.165c-.037-.011-.07-.026-.107-.036a2.017 2.017 0 00-.459-.057H29.893c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V37.155c0-.075-.012-.15-.019-.224zm-54.62 70.504l-5.071-8.942-1.782 2.183v6.76h-4.64V86.724h4.64v9.156h.093c.461-.799.952-1.535 1.414-2.273l4.701-6.883h5.747l-6.853 8.819 7.221 11.892h-5.47zm25.196 0l-.307-7.928c-.092-2.489-.185-5.501-.185-8.512h-.092a112.304 112.304 0 01-2.304 8.02l-2.52 8.082h-3.657l-2.212-8.021a95.329 95.329 0 01-1.875-8.081h-.062c-.123 2.796-.215 5.991-.368 8.573l-.369 7.866h-4.333l1.322-20.711h6.238l2.028 6.914c.645 2.396 1.29 4.979 1.751 7.405h.092c.584-2.396 1.291-5.133 1.967-7.437l2.212-6.883h6.115l1.137 20.711H70.45zm21.108 0H78.62V86.724h4.702v16.778h8.236v3.933zm-61.665-27.03V16.488h46.334v20.466a2 2 0 002 2h17.666l.002 41.451H29.893z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M62.268 24.432c13.417-.051 24.609 10.932 24.583 24.615-.026 13.352-11.026 24.638-24.788 24.534-13.489-.104-24.382-11.409-24.338-24.688.045-13.418 11.108-24.499 24.543-24.461zM40.497 42.338l.24.169c.243-.147.506-.271.724-.448.485-.396.939-.833 1.421-1.233 2.892-2.401 6.04-3.103 9.513-1.355 1.175.591 2.351 1.207 3.445 1.933 4.835 3.209 9.569 6.578 14.483 9.66 3.888 2.441 8.124 4.187 12.677 5.071.703.137 1.019-.047 1.153-.675.183-.855.29-1.729.522-2.57.153-.553-.051-.758-.521-.868a16.977 16.977 0 01-6.573-3.15c-3.532-2.756-6.964-5.644-10.386-8.538-2.369-2.005-4.619-4.15-6.979-6.167-3.205-2.735-6.961-3.24-10.958-2.44-.987.197-2.146.417-2.838 1.049-2.38 2.176-4.267 4.762-5.395 7.83-.208.565-.354 1.155-.528 1.732zm40.565 19.519a72.918 72.918 0 00-.273-.292c-.29.073-.582.14-.87.219-3.088.846-6.222 1.586-9.427 1.426-2.766-.139-5.54-.516-8.263-1.033-4.708-.895-9.07-2.855-13.48-4.666-1.396-.573-2.908-1.067-4.396-1.168-1.99-.136-3.083 1.877-2.137 3.596 2.224 4.041 5.379 7.145 9.458 9.302.327.172.701.254 1.239.444-.108-.536-.155-.837-.229-1.129-.54-2.146.336-3.044 2.535-2.59.306.063.613.125.917.204 5.291 1.365 10.635 2.005 16.087 1.182 2.882-.436 5.701-.995 7.505-3.652.426-.629.889-1.231 1.334-1.843zM55.769 27.255l.048.391c.229.038.456.101.685.112 1.188.066 2.376.108 3.563.18 4.343.263 8.175 1.824 11.121 5.02 2.288 2.479 4.212 5.293 6.367 7.899a25.944 25.944 0 003.14 3.218c.855.729 1.883.625 2.606.036.79-.644.917-1.257.513-2.452-1.425-4.223-3.917-7.722-7.433-10.417-5.098-3.911-10.875-5.564-17.292-4.712-1.117.148-2.212.479-3.318.725z"
                        })
                    ]
                });
            case "kmz":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "KMZ",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.874 36.931a1.977 1.977 0 00-.475-1.295L79.731 13.171c-.004-.006-.01-.008-.016-.014a2 2 0 00-.527-.412 2.129 2.129 0 00-.395-.165c-.037-.011-.07-.026-.107-.036a2.017 2.017 0 00-.459-.057H29.893c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V37.155c0-.075-.012-.15-.019-.224zm-56.593 70.546l-5.071-8.941-1.782 2.181v6.761h-4.64V86.765h4.64v9.158h.093c.461-.8.952-1.537 1.414-2.274l4.701-6.884h5.747l-6.853 8.82 7.221 11.892h-5.47zm25.196 0l-.307-7.929c-.092-2.488-.185-5.501-.185-8.511h-.092a112.757 112.757 0 01-2.304 8.02l-2.52 8.082h-3.657L57.2 99.118a95.419 95.419 0 01-1.875-8.081h-.062c-.123 2.795-.215 5.99-.368 8.572l-.369 7.867h-4.333l1.322-20.712h6.238l2.028 6.914c.645 2.397 1.29 4.978 1.751 7.405h.092c.584-2.396 1.291-5.131 1.967-7.436l2.212-6.884h6.115l1.137 20.712h-4.578zm22.951 0H75.326v-2.521L85.19 90.76v-.123h-8.942v-3.872h15.027v2.704l-9.649 14.013v.123h9.802v3.872zM29.893 80.405V16.488h46.334v20.466a2 2 0 002 2h17.666l.002 41.451H29.893z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M62.873 24.432c13.417-.051 24.609 10.932 24.583 24.615-.026 13.352-11.026 24.638-24.788 24.535-13.489-.104-24.382-11.41-24.338-24.688.045-13.419 11.108-24.5 24.543-24.462zM41.101 42.338l.24.169c.243-.147.506-.271.724-.448.485-.396.939-.833 1.421-1.233 2.892-2.401 6.04-3.103 9.513-1.355 1.175.591 2.351 1.207 3.445 1.933 4.835 3.209 9.569 6.578 14.483 9.66 3.888 2.441 8.124 4.187 12.677 5.071.703.137 1.019-.047 1.153-.675.183-.855.29-1.729.522-2.57.153-.553-.051-.758-.521-.868a16.977 16.977 0 01-6.573-3.15c-3.532-2.756-6.964-5.644-10.386-8.538-2.369-2.005-4.619-4.15-6.979-6.167-3.205-2.735-6.961-3.24-10.958-2.44-.987.197-2.146.417-2.838 1.049-2.38 2.176-4.267 4.762-5.395 7.83-.207.565-.354 1.155-.528 1.732zm40.565 19.519a72.918 72.918 0 00-.273-.292c-.29.073-.582.14-.87.219-3.088.846-6.222 1.586-9.427 1.426-2.766-.139-5.54-.516-8.263-1.033-4.708-.895-9.07-2.855-13.48-4.666-1.396-.573-2.908-1.067-4.396-1.168-1.99-.136-3.083 1.877-2.137 3.596 2.224 4.041 5.379 7.145 9.458 9.302.327.172.701.254 1.239.444-.108-.536-.155-.837-.229-1.129-.54-2.146.336-3.044 2.535-2.59.306.063.613.125.917.204 5.291 1.365 10.635 2.005 16.087 1.182 2.882-.436 5.701-.995 7.505-3.652.427-.629.889-1.231 1.334-1.843zM56.374 27.255l.048.391c.229.038.456.101.685.112 1.188.066 2.376.108 3.563.18 4.343.263 8.175 1.824 11.121 5.02 2.288 2.479 4.212 5.293 6.367 7.899a25.944 25.944 0 003.14 3.218c.855.729 1.883.625 2.606.036.79-.644.917-1.257.513-2.452-1.425-4.223-3.917-7.722-7.433-10.417-5.098-3.911-10.875-5.564-17.292-4.712-1.117.148-2.213.479-3.318.725z"
                        })
                    ]
                });
            case "pdf":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "PDF",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M61.508 88.796c-1.225 0-2.016.108-2.484.216v15.874c.469.108 1.225.108 1.908.108 4.967.035 8.207-2.699 8.207-8.495.035-5.04-2.916-7.703-7.631-7.703zM40.303 88.725c-1.115 0-1.871.107-2.268.215v7.164c.469.107 1.045.144 1.834.144 2.918 0 4.717-1.476 4.717-3.96 0-2.232-1.549-3.563-4.283-3.563z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.98 36.443a1.977 1.977 0 0 0-.475-1.295L79.838 12.684c-.004-.006-.012-.008-.016-.014a2 2 0 0 0-.396-.334c-.043-.028-.088-.053-.133-.078a2.02 2.02 0 0 0-.395-.165c-.035-.011-.07-.026-.107-.036a1.946 1.946 0 0 0-.457-.057H30c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.205 0 4-1.794 4-4V36.667c0-.075-.012-.149-.02-.224zM47.789 97.902c-1.871 1.764-4.643 2.557-7.883 2.557-.719 0-1.369-.037-1.871-.108v8.675H32.6V85.088c1.691-.287 4.068-.504 7.416-.504 3.383 0 5.795.648 7.414 1.944 1.549 1.224 2.59 3.239 2.59 5.615s-.79 4.392-2.231 5.759zm23.147 8.244c-2.553 2.123-6.441 3.131-11.191 3.131-2.844 0-4.859-.18-6.229-.359v-23.83c2.016-.323 4.645-.504 7.416-.504 4.605 0 7.594.828 9.934 2.592 2.52 1.872 4.104 4.859 4.104 9.143-.001 4.644-1.693 7.847-4.034 9.827zm22.466-16.882h-9.324v5.543h8.711v4.464h-8.711v9.755h-5.506V84.765h14.83v4.499zM30 79.917V16h46.334v20.466a2 2 0 0 0 2 2H96l.002 41.451H30z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M83.52 54.988c-.117-.011-2.936-.268-7.262-.268-1.355 0-2.721.026-4.068.077-8.543-6.411-15.541-12.827-19.287-16.423.068-.396.115-.709.137-.949.494-5.216-.055-8.737-1.627-10.466-1.029-1.13-2.541-1.506-4.117-1.075-.979.256-2.791 1.206-3.371 3.139-.641 2.136.389 4.729 3.094 7.736.043.045.961 1.007 2.629 2.637-1.084 5.169-3.922 16.324-5.299 21.68-3.234 1.728-5.928 3.81-8.014 6.197l-.137.156-.088.188c-.215.451-1.242 2.794-.471 4.676.352.855 1.012 1.48 1.908 1.808l.24.065s.217.047.598.047c1.668 0 5.787-.877 7.996-9.017l.535-2.063c7.711-3.748 17.35-4.957 24.336-5.294a164.18 164.18 0 0 0 10.635 7.281l.113.066c.168.085 1.688.836 3.467.837 2.543 0 4.4-1.56 5.092-4.28l.035-.186c.193-1.554-.197-2.955-1.129-4.05-1.963-2.307-5.617-2.508-5.945-2.519zM38.447 71.212c-.016-.018-.023-.036-.031-.056-.166-.399.033-1.368.326-2.078 1.258-1.406 2.768-2.697 4.51-3.859-1.697 5.492-4.164 5.966-4.805 5.993zm10.772-36.491c-2.605-2.9-2.566-4.338-2.426-4.822.23-.809 1.268-1.115 1.277-1.118.523-.142.84-.114 1.123.196.639.702 1.188 2.821.971 6.707-.615-.618-.945-.963-.945-.963zM47.873 59.42l.045-.172-.006.002c1.305-5.11 3.186-12.592 4.268-17.398l.039.037.004-.023a221.37 221.37 0 0 0 15.293 13.131l-.073.003.107.08c-6.054.512-13.284 1.705-19.677 4.34zm39.754 1.676c-.461 1.694-1.348 1.926-2.16 1.926-.943 0-1.852-.393-2.059-.488a155.575 155.575 0 0 1-7.209-4.814h.059c4.176 0 6.957.253 7.066.261.697.026 2.904.352 3.855 1.47.374.438.516.962.448 1.645z"
                        })
                    ]
                });
            case "ppt":
            case "pptx":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "PPT",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M62.498 88.844c-1.115 0-1.871.107-2.268.215v7.164c.469.107 1.045.144 1.836.144 2.916 0 4.715-1.476 4.715-3.96 0-2.232-1.547-3.563-4.283-3.563zM41.582 88.844c-1.115 0-1.871.107-2.268.215v7.164c.469.107 1.045.144 1.836.144 2.916 0 4.715-1.476 4.715-3.96 0-2.232-1.547-3.563-4.283-3.563z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.98 36.443a1.979 1.979 0 00-.477-1.295L79.838 12.684c-.006-.006-.012-.008-.016-.014a2.011 2.011 0 00-.529-.412 2.02 2.02 0 00-.395-.165c-.037-.011-.07-.026-.107-.036a1.95 1.95 0 00-.459-.057H30c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.205 0 4-1.794 4-4V36.667c0-.075-.012-.149-.02-.224zM49.07 98.021c-1.873 1.764-4.645 2.557-7.885 2.557-.719 0-1.367-.037-1.871-.108v8.675h-5.436V85.207c1.691-.287 4.068-.504 7.416-.504 3.383 0 5.795.648 7.414 1.944 1.549 1.224 2.592 3.239 2.592 5.615s-.79 4.392-2.23 5.759zm20.916 0c-1.873 1.764-4.645 2.557-7.885 2.557-.719 0-1.367-.037-1.871-.108v8.675h-5.436V85.207c1.691-.287 4.068-.504 7.416-.504 3.383 0 5.795.648 7.414 1.944 1.549 1.224 2.592 3.239 2.592 5.615s-.79 4.392-2.23 5.759zm22.535-8.53h-6.623v19.653H80.39V89.491h-6.516v-4.607H92.52v4.607zM30 79.917V16h46.332v20.466a2 2 0 002 2H96v41.451H30z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M59.889 37.984c-9.044 0-16.373 7.331-16.373 16.374 0 9.042 7.329 16.372 16.373 16.372 9.042 0 16.373-7.33 16.373-16.372H59.889V37.984z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M62.11 51.774v.005h16.374c0-4.606-1.91-8.761-4.971-11.736L62.11 51.774zM61.938 48.897L73.514 37.32c-3.256-3.257-7.319-4.846-11.588-4.785l.008 16.358.004.004z"
                        })
                    ]
                });
            case "rdf":
                return /*#__PURE__*/ (0, $hgUW1$jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "RDF",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                        fill: fill,
                        d: "M99.98 36.525a1.968 1.968 0 0 0-.477-1.295L79.838 12.766c-.004-.006-.01-.008-.016-.014a2 2 0 0 0-.527-.412 2.129 2.129 0 0 0-.395-.165c-.037-.011-.07-.026-.107-.036a2.017 2.017 0 0 0-.459-.057H30c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V36.749c0-.075-.012-.149-.02-.224zm-51.335 71.153c-.359-.621-.883-2.418-1.535-5.129-.588-2.744-1.535-3.496-3.562-3.527h-1.503v8.656h-4.933V85.953c1.601-.262 3.985-.458 6.632-.458 3.267 0 5.554.489 7.121 1.731 1.308 1.045 2.026 2.58 2.026 4.604 0 2.812-1.993 4.735-3.888 5.423v.1c1.535.621 2.385 2.092 2.939 4.115.687 2.482 1.373 5.357 1.797 6.207l-5.094.003zm42.209-17.936h-8.461v5.031h7.906v4.051h-7.906v8.854h-4.998V85.659h13.459v4.083zM30 79.999V16.082h46.334v20.466a2 2 0 0 0 2 2H96l.002 41.451H30zm14.299 9.189c-1.208 0-1.895.1-2.254.164v6.075h1.961c2.482 0 3.953-1.241 3.953-3.169 0-2.026-1.373-3.038-3.66-3.07zm19.43-.211c-.97 0-1.597.101-1.966.196v14.407c.371.098.97.098 1.511.098 3.936.033 6.5-2.449 6.5-7.71.029-4.573-2.309-6.991-6.045-6.991zm7.47 15.748c-2.023 1.926-5.104 2.842-8.867 2.842-2.252 0-3.849-.164-4.932-.325v-21.63c1.597-.293 3.678-.457 5.872-.457 3.649 0 6.017.752 7.871 2.353 1.994 1.699 3.25 4.41 3.25 8.298 0 4.214-1.34 7.121-3.194 8.919zm3.942-37.196c-.039.318-.064.641-.119.957-.597 3.539-2.44 5.965-5.517 7.26-1.18.496-2.419.638-3.676.497-3.5-.392-6.371-3.035-7.32-6.733a9.945 9.945 0 0 1-.165-4.133.423.423 0 0 0-.052-.266c-2.122-3.267-4.955-5.38-8.556-6.231-.591-.14-1.197-.207-1.797-.292-.085-.012-.2.036-.269.099-1.272 1.164-2.726 1.906-4.375 2.114-2.942.373-5.439-.635-7.439-3.021-1.147-1.37-1.822-3.002-2.057-4.838-.56-4.389 1.783-8.605 5.66-10.003 2.965-1.07 5.7-.478 8.143 1.65a.535.535 0 0 0 .446.149c1.875-.209 3.656-.759 5.323-1.727 1.993-1.158 3.611-2.771 4.906-4.778a.473.473 0 0 0 .062-.301c-.723-4.083 1.309-8.345 4.79-10.052.938-.459 1.913-.746 2.939-.815.062-.004.123-.027.185-.042h.836c.065.015.134.033.201.045.528.098 1.073.132 1.582.3 3.438 1.144 5.494 3.655 6.153 7.51.053.303.076.611.113.917v.952c-.014.066-.035.131-.039.198a9.282 9.282 0 0 1-.684 3.008c-1 2.423-2.652 4.087-4.936 5.016a.375.375 0 0 0-.188.174c-1.13 2.654-1.576 5.433-1.254 8.344a16.808 16.808 0 0 0 1.216 4.623c.061.142.143.22.275.277 3.068 1.315 4.906 3.737 5.494 7.276.051.303.076.61.115.915.004.317.004.634.004.951zm-9.728-15.866c-.033-.509-.056-1.018-.099-1.525-.15-1.745-.603-3.399-1.272-4.987a.348.348 0 0 0-.167-.175 8.588 8.588 0 0 1-2.728-1.716.316.316 0 0 0-.238-.071c-.613.091-1.231.156-1.834.3-3.585.855-6.406 2.967-8.52 6.22a.42.42 0 0 0-.054.265 10.24 10.24 0 0 1 .001 3.369.418.418 0 0 0 .05.265 14.899 14.899 0 0 0 2.358 2.876c2.297 2.168 4.973 3.356 7.992 3.649a.383.383 0 0 0 .269-.094 8.7 8.7 0 0 1 2.679-1.687.392.392 0 0 0 .195-.196 16.813 16.813 0 0 0 1.368-6.493zm4.462 8.008c-2.167-1.274-5.811-1.358-8.517 1.55-2.568 2.759-2.756 6.731-1.455 9.402-.64-2.654-.194-5.055 1.385-7.205.816.753 1.618.467 2.036.032.554-.577.56-1.293.011-2.247a6.6 6.6 0 0 1 1.742-1.187c1.56-.724 3.161-.822 4.798-.345zM45.402 44.268c-2.504-1.415-6.096-1.141-8.577 1.606-2.678 2.965-2.587 6.946-1.409 9.321a8.512 8.512 0 0 1-.132-3.773 7.785 7.785 0 0 1 1.54-3.407c.288.312.629.472 1.013.476a1.33 1.33 0 0 0 1.023-.461c.214-.237.353-.522.394-.854a1.682 1.682 0 0 0-.423-1.369c1.968-1.717 4.154-2.206 6.571-1.539zM61.294 32.61c.301.303.638.479 1.034.479s.742-.156 1.021-.466c.534-.597.53-1.278-.019-2.228 1.957-1.71 4.148-2.194 6.572-1.52-2.521-1.451-6.482-1.175-9.031 2.128-.95 1.231-1.496 2.663-1.696 4.261-.231 1.847.306 3.88.735 4.556-.646-2.66-.196-5.052 1.384-7.21z"
                    })
                });
            case "xls":
            case "xlsx":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "XLS",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.874 36.585a1.977 1.977 0 00-.475-1.295L79.731 12.825c-.004-.006-.01-.008-.016-.014a2 2 0 00-.527-.412 2.129 2.129 0 00-.395-.165c-.037-.011-.07-.026-.107-.036a2.017 2.017 0 00-.459-.057H29.893c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V36.809c0-.076-.012-.15-.019-.224zm-50.723 72.448l-2.246-4.492c-.92-1.73-1.51-3.019-2.209-4.455h-.074c-.516 1.437-1.141 2.725-1.914 4.455l-2.063 4.492h-6.406l7.18-12.556-6.922-12.261h6.443l2.172 4.529a78.78 78.78 0 011.879 4.123h.072c.59-1.583 1.068-2.688 1.693-4.123l2.1-4.529h6.406L48.267 96.33l7.365 12.703h-6.481zm24.998 0H58.647V84.217h5.635v20.104h9.867v4.712zm9.387.368c-2.834 0-5.633-.736-7.031-1.51l1.141-4.639c1.51.772 3.83 1.546 6.223 1.546 2.578 0 3.939-1.067 3.939-2.688 0-1.547-1.178-2.431-4.16-3.498-4.123-1.436-6.813-3.719-6.813-7.327 0-4.234 3.535-7.475 9.391-7.475 2.797 0 4.859.59 6.332 1.252l-1.252 4.529c-.994-.479-2.762-1.179-5.191-1.179s-3.607 1.104-3.607 2.394c0 1.583 1.398 2.283 4.602 3.498 4.381 1.62 6.443 3.902 6.443 7.4-.001 4.163-3.204 7.697-10.017 7.697zM29.893 80.059V16.142h46.334v20.466a2 2 0 002 2h17.666l.002 41.451H29.893z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M68.81 37.766H35.643v31h50.75v-31H68.81zm0 15H53.227v-6.5H68.81v6.5zm-32.167-14h15.583v6.5H36.643v-6.5zm0 7.5h15.583v6.5H36.643v-6.5zm0 7.5h15.583v6.5H36.643v-6.5zm0 14v-6.5h15.583v6.5H36.643zm16.584 0v-6.5H68.81v6.5H53.227zm32.166 0H69.81v-6.5h15.583v6.5zm0-15H69.81v-6.5h15.583v6.5zm-15.583-7.5v-6.5h15.583v6.5H69.81z"
                        })
                    ]
                });
            case "xml":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "XML",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.979 36.442a1.968 1.968 0 0 0-.475-1.295L79.838 12.682c-.006-.005-.012-.008-.016-.013a1.978 1.978 0 0 0-.529-.412 2.011 2.011 0 0 0-.395-.165c-.037-.011-.07-.027-.107-.035a1.95 1.95 0 0 0-.459-.057H30c-2.207 0-4 1.794-4 4v94c0 2.205 1.793 4 4 4h66c2.205 0 4-1.795 4-4V36.666c0-.075-.012-.149-.021-.224zm-55.108 70.103l-1.977-3.95c-.809-1.521-1.326-2.653-1.941-3.917h-.064c-.453 1.264-1.004 2.396-1.684 3.917l-1.813 3.95h-5.631l6.311-11.039-6.084-10.778h5.664l1.908 3.981a69.266 69.266 0 0 1 1.652 3.625h.064c.518-1.391.938-2.361 1.488-3.625l1.846-3.981h5.631l-6.15 10.65 6.475 11.167h-5.695zm27.127 0l-.324-8.352c-.098-2.622-.195-5.794-.195-8.967h-.096a117.819 117.819 0 0 1-2.428 8.449l-2.654 8.513h-3.854l-2.33-8.448c-.711-2.557-1.455-5.664-1.975-8.514h-.064c-.129 2.946-.227 6.313-.389 9.031l-.387 8.287h-4.564l1.393-21.817h6.57l2.137 7.284c.68 2.523 1.359 5.242 1.844 7.799h.098c.615-2.523 1.359-5.404 2.072-7.832l2.33-7.251h6.441l1.197 21.817h-4.822zm22.24 0H80.609V84.728h4.953v17.675h8.676v4.142zM96 79.916H30V16h46.332v20.465a2 2 0 0 0 2 2H96v41.451z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M33.866 55.497L45.41 60.86v-2.549l-8.73-3.824v-.049l8.73-3.824v-2.549l-11.544 5.363zM81.783 50.614l8.924 3.824v.049l-8.924 3.824v2.549l11.544-5.291v-2.213l-11.544-5.291zM63.367 40.688c-7.607 0-13.774 6.167-13.774 13.774s6.167 13.774 13.774 13.774S77.14 62.069 77.14 54.462s-6.165-13.774-13.773-13.774zm5.177 5.467l.985-.659s-.414-1.061-.344-1.581c.239-.116 1.209.393 2.029 1.256-.552 2.054-1.847 1.809-1.847 1.809s-.947-.023-.823-.825zm-8.303 12.128c-.061.308-.432 1.049-.678 1.541-.246.493-.369.679-.679.925-.309.25-.492.679-.492.679l-.062 1.047s.121.865.306 1.174c.185.306-.66 2.143-.66 2.143-.536-.106-.834-.728-1.02-1.218-.186-.495-.431-.757-.369-1.311.062-.555-.479-.848-.662-1.156-.184-.312-.432-.741-.432-1.049 0-.309-.677-.741-.677-.741s-1.234-.555-1.419-.8c-.185-.247-.372-1.298-.432-1.727-.063-.43.184-1.54.184-1.54s.498-.374.185-.679c-.309-.308-.368-1.112-.368-1.112l-.556-.615s-.433-.617-.494-.926c-.062-.308 0-.493.062-.802.061-.31-.123-.863-.123-1.17 2.304-5.649 6.167-6.967 6.167-6.967l.309 1.292s-.678.186-1.046.064c-.372-.124-.559-.124-.559-.124l-.491.677s-.188.433-.249.68c-.061.247.123.615.123.615s.862.062.862-.184c0-.247-.121-.37-.121-.37l-.124-.432s.559-.309 2.034-.187c1.48.125.927 1.172 1.545 1.421.617.247-.496 1.109-.742 1.601-.246.494-.616-.617-.616-.617s.37-.427-.246-.554c-.617-.121-1.025 1.11-.713 1.05.307-.061.651.332.588.639-.062.309-.062.285-.37.962-.308.678-.978 1.18-.978 1.18s-.315-.192-.133.179c.189.369-.061 1.232-.061 1.479 0 .245-.74-.432-.861-1.05-.126-.613-.848-.079-1.094-.016-.247.063-.697-.107-.816-.413-.126-.31-1.237.615-1.546.799-.307.186-.182.68.309.433.493-.247.924-.062.802.434-.122.49-.614.185-.554.49.061.308.554.617.676 1.05.124.43 1.298.062 1.667-.124.369-.187 1.418-.37 1.54.124.128.494 1.297.676 1.728.798.433.124 1.296.186 1.791.679.491.495-.37 1.42-.435 1.729zm2.775-14.43c-.063.618-1.047 1.418-.924 1.667.124.249 0 1.303-.863.377-.864-.925-1.729-1.239-1.665-1.858.015-.123.893-.316.907-.532 1.308-1.216 3.396-.966 3.556-.678-.374.611-.949.407-1.011 1.024zm10.715 4.141c.833 1.431 2.052 5.247 1.602 5.929l-.498-.224H73.19l.985 1.153s.477.7 1.153.655c-.445 5.157-4.749 8.469-4.749 8.469-.657-.658-.328-1.231-.328-1.231l.185-.989.104-1.664s0-1.725-1.646-.906c-1.767.451-1.03.451-2.815.575-1.788.124-1.492-3.646-1.492-3.646 0-5.643 4.327-1.384 4.327-1.384 2.469 1.642 2.798-1.362 2.798-1.362l1.808-.655.164-.824-.263-1.149-2.627-1.084s-.253.854.421 1.903c0 0-.225 1.192-.778.884l-1.522-.765s-.512-.222-1.334.273c-.824.492-2.217-.024-2.217-.024s.112-.827.978-1.256l.707-.467s-.185-.844-.023-1.501c.162-.657.452-.082 1.109-.576.657-.491 1.11.966 2.096.802.985-.165.494-.329 1.153-.657.659-.329 1.151.657 1.151.657l1.313.164c0 .001-.205-1.485-.117-1.1z"
                        })
                    ]
                });
            case "zip":
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "ZIP",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M99.98 36.443a1.977 1.977 0 0 0-.475-1.295L79.838 12.684c-.004-.006-.01-.008-.016-.014a2 2 0 0 0-.527-.412 2.129 2.129 0 0 0-.395-.165c-.037-.011-.07-.026-.107-.036a1.962 1.962 0 0 0-.459-.057H30c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V36.667c0-.075-.012-.149-.02-.224zm-42.869 72.501H38.25v-2.952l11.555-16.629v-.145H39.33v-4.535h17.602v3.168l-11.303 16.414v.143h11.482v4.536zm8.967 0H60.57v-24.26h5.508v24.26zM86.02 97.822c-1.871 1.764-4.643 2.555-7.883 2.555-.721 0-1.367-.035-1.871-.107v8.675H70.83V85.008c1.691-.289 4.066-.504 7.414-.504 3.385 0 5.795.647 7.416 1.943 1.547 1.224 2.592 3.239 2.592 5.615 0 2.376-.793 4.392-2.232 5.76zM30 79.917V16h23.92v-.629h6.066V16h16.348v20.466a2 2 0 0 0 2 2H96l.002 41.451H30z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M78.533 88.643c-1.117 0-1.873.108-2.268.217v7.162c.467.108 1.043.145 1.836.145 2.914 0 4.715-1.477 4.715-3.959 0-2.233-1.548-3.565-4.283-3.565zM59.986 19.392h6.066v2.503h-6.066zM53.92 16h6.066v1.875H53.92zM53.92 23.138h6.066v2.503H53.92zM59.986 27.236h6.066v2.503h-6.066zM59.986 35.145h6.066v2.503h-6.066zM53.92 31.125h6.066v2.503H53.92zM59.986 39.692c-4.295 0-6.338 3.48-6.338 7.776L52.21 60.495a7.774 7.774 0 1 0 15.548 0l-1.434-13.027c.002-4.295-2.043-7.776-6.338-7.776zm2.577 25.165h-5.148V53.982h5.148v10.875z"
                        })
                    ]
                });
            default:
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "dkan-icon",
                    title: "Data",
                    width: width,
                    height: height,
                    viewBox: "0 0 126 126",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M37.729 88.977c-.969 0-1.597.101-1.967.196v14.407c.371.098.969.098 1.511.098 3.935.033 6.501-2.449 6.501-7.71.028-4.573-2.309-6.991-6.045-6.991zM57.978 89.042h-.058c-.286 1.308-.57 2.974-.884 4.247l-1.141 4.672h4.249l-1.197-4.672c-.344-1.307-.685-2.939-.969-4.247z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M100.98 36.443a1.968 1.968 0 0 0-.477-1.295L80.838 12.684c-.004-.006-.01-.008-.016-.014a2 2 0 0 0-.527-.412 2.129 2.129 0 0 0-.395-.165c-.037-.011-.07-.026-.107-.036a1.962 1.962 0 0 0-.459-.057H31c-2.205 0-4 1.795-4 4v94c0 2.206 1.795 4 4 4h66c2.207 0 4-1.794 4-4V36.667c0-.075-.012-.149-.02-.224zm-55.781 68.282c-2.023 1.926-5.104 2.842-8.867 2.842-2.252 0-3.849-.164-4.933-.325v-21.63c1.597-.293 3.678-.457 5.873-.457 3.65 0 6.017.752 7.87 2.353 1.996 1.699 3.25 4.41 3.25 8.298.001 4.214-1.34 7.121-3.193 8.919zm17.054 2.612l-1.482-5.651h-5.503l-1.368 5.651h-4.505l5.874-22.019h5.703l5.959 22.019h-4.678zm25.643-18.295h-.056c-.285 1.308-.568 2.974-.884 4.247l-1.142 4.672h4.248l-1.196-4.672c-.345-1.307-.684-2.939-.97-4.247zm4.277 18.295l-1.481-5.651h-5.504l-1.367 5.651h-4.504l5.871-22.019h5.703l5.959 22.019h-4.677zM80.447 89.5h-5.246v17.837h-4.363V89.5h-5.16v-4.182h14.771l-.002 4.182zM31 79.917V16h46.334v20.466a2 2 0 0 0 2 2H97l.002 41.451H31z"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("path", {
                            fill: fill,
                            d: "M68.203 54.434a5.111 5.111 0 0 1 2.854-2.792.317.317 0 0 0 .197-.289v-3.885a.33.33 0 0 0-.197-.296 5.117 5.117 0 0 1-2.854-2.79 5.13 5.13 0 0 1 .042-3.99.33.33 0 0 0-.063-.349l-2.748-2.747c-.15-.149-.268-.103-.353-.068a5.093 5.093 0 0 1-3.986.043 5.1 5.1 0 0 1-2.794-2.851.315.315 0 0 0-.29-.197h-3.884a.317.317 0 0 0-.293.197 5.11 5.11 0 0 1-2.789 2.851 5.096 5.096 0 0 1-3.994-.043c-.08-.031-.193-.081-.347.068l-2.75 2.747a.33.33 0 0 0-.066.352 5.087 5.087 0 0 1 .042 3.987 5.11 5.11 0 0 1-2.848 2.79.317.317 0 0 0-.204.296v3.885c0 .129.083.242.204.289a5.116 5.116 0 0 1 2.848 2.792 5.105 5.105 0 0 1-.042 3.994.32.32 0 0 0 .066.344l2.75 2.751c.154.15.264.101.347.063a5.067 5.067 0 0 1 3.988-.041 5.104 5.104 0 0 1 2.794 2.85.315.315 0 0 0 .293.198h3.884a.31.31 0 0 0 .29-.198 5.12 5.12 0 0 1 2.794-2.85 5.126 5.126 0 0 1 3.992.041c.083.038.193.084.348-.063l2.746-2.751a.315.315 0 0 0 .064-.344 5.135 5.135 0 0 1-.041-3.994zm-12.136 2.53c-4.17 0-7.553-3.389-7.553-7.558 0-4.163 3.383-7.558 7.553-7.558 4.168 0 7.557 3.395 7.557 7.558 0 4.169-3.389 7.558-7.557 7.558zM84.07 59.733a2.576 2.576 0 0 1-1.434-1.4 2.563 2.563 0 0 1 .021-2.004.166.166 0 0 0-.033-.176l-1.379-1.378c-.076-.076-.136-.052-.179-.034a2.553 2.553 0 0 1-3.402-1.41.155.155 0 0 0-.146-.1h-1.951a.157.157 0 0 0-.146.1 2.57 2.57 0 0 1-1.399 1.431 2.554 2.554 0 0 1-2.004-.021c-.041-.017-.099-.042-.176.034l-1.381 1.378a.16.16 0 0 0-.031.179c.279.632.283 1.361.021 2.001a2.567 2.567 0 0 1-1.429 1.4.16.16 0 0 0-.104.149v1.951c0 .064.041.121.104.145a2.554 2.554 0 0 1 1.408 3.406.164.164 0 0 0 .031.175l1.381 1.381c.078.074.135.051.176.029a2.531 2.531 0 0 1 1.024-.215 2.556 2.556 0 0 1 2.379 1.625c.021.061.083.1.146.1h1.951a.157.157 0 0 0 .146-.1 2.567 2.567 0 0 1 1.402-1.43 2.563 2.563 0 0 1 2.004.02c.041.021.099.043.175-.029l1.379-1.381a.16.16 0 0 0 .033-.175 2.555 2.555 0 0 1 1.413-3.406.157.157 0 0 0 .099-.145v-1.951a.17.17 0 0 0-.099-.149zm-7.526 4.917a3.796 3.796 0 0 1 0-7.59 3.798 3.798 0 0 1 3.793 3.795 3.796 3.796 0 0 1-3.793 3.795z"
                        })
                    ]
                });
        }
    }
}
$7e413a60cdf9bca9$var$FormatIcon.defaultProps = {
    format: "data",
    fill: "#555555",
    width: 50,
    height: 50
};
$7e413a60cdf9bca9$var$FormatIcon.propTypes = {
    format: (0, $hgUW1$proptypes).string,
    fill: (0, $hgUW1$proptypes).string,
    width: (0, $hgUW1$proptypes).number,
    height: (0, $hgUW1$proptypes).number
};
var $7e413a60cdf9bca9$export$2e2bcd8739ae039 = $7e413a60cdf9bca9$var$FormatIcon;






const $4ef45fb61f491f4a$var$Text = ({ label: label, value: value, children: children, wrapper: wrapper })=>{
    const parser = new (0, $hgUW1$Parser)();
    const { tag: tag, classes: classes } = wrapper;
    const TextWrapper = ()=>{
        if (tag) {
            const TagElement = `${tag}`;
            return /*#__PURE__*/ (0, $hgUW1$jsxs)(TagElement, {
                className: classes,
                children: [
                    label && /*#__PURE__*/ (0, $hgUW1$jsx)("strong", {
                        children: `${label}: `
                    }),
                    value ? parser.parse(value) : children
                ]
            });
        }
        return /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Fragment), {
            children: [
                label && /*#__PURE__*/ (0, $hgUW1$jsx)("strong", {
                    children: `${label}: `
                }),
                value ? parser.parse(value) : children
            ]
        });
    };
    return /*#__PURE__*/ (0, $hgUW1$jsx)(TextWrapper, {});
};
$4ef45fb61f491f4a$var$Text.defaultProps = {
    label: "",
    value: "",
    children: "",
    wrapper: {}
};
$4ef45fb61f491f4a$var$Text.propTypes = {
    // Text in strong tag followed by semi colon.
    label: (0, $hgUW1$proptypes).string,
    // The content of the Text component after the label.
    // Will be required in future versions.
    children: (0, $hgUW1$proptypes).node,
    // If classes are added, will wrap text in div with classes.
    wrapper: (0, $hgUW1$proptypes).shape({
        tag: (0, $hgUW1$proptypes).string,
        classes: (0, $hgUW1$proptypes).string
    }),
    // Deprecated way to pass markup to the Text component.
    value: (0, $hgUW1$proptypes).string
};
var $4ef45fb61f491f4a$export$2e2bcd8739ae039 = $4ef45fb61f491f4a$var$Text;


const $110e95b095a6296a$var$FileDownload = ({ title: title, format: format, downloadURL: downloadURL, description: description })=>{
    const label = title || format;
    const item = /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: "dc-resource",
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $7e413a60cdf9bca9$export$2e2bcd8739ae039), {
                format: format
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("a", {
                href: downloadURL,
                title: label,
                children: label
            }),
            description && /*#__PURE__*/ (0, $hgUW1$jsx)((0, $4ef45fb61f491f4a$export$2e2bcd8739ae039), {
                value: description,
                wrapper: {
                    tag: "div",
                    classes: "dc-file-description"
                }
            })
        ]
    });
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: "dc-file-download",
        children: item
    });
};
$110e95b095a6296a$var$FileDownload.defaultProps = {
    description: "",
    title: ""
};
$110e95b095a6296a$var$FileDownload.propTypes = {
    title: (0, $hgUW1$proptypes).string,
    format: (0, $hgUW1$proptypes).string.isRequired,
    downloadURL: (0, $hgUW1$proptypes).string.isRequired,
    description: (0, $hgUW1$proptypes).string
};
var $110e95b095a6296a$export$2e2bcd8739ae039 = $110e95b095a6296a$var$FileDownload;












const $a2f075e1699eb7ef$var$ItemTypes = {
    CARD: "card"
};
const $a2f075e1699eb7ef$var$Card = ({ id: id, index: index, moveCard: moveCard, children: children })=>{
    const ref = (0, $hgUW1$react).useRef(null);
    const [, drop] = (0, $hgUW1$useDrop)({
        accept: $a2f075e1699eb7ef$var$ItemTypes.CARD,
        hover (item, monitor) {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) return;
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        }
    });
    const [{ isDragging: isDragging }, drag] = (0, $hgUW1$useDrag)({
        type: $a2f075e1699eb7ef$var$ItemTypes.CARD,
        item: {
            id: id,
            index: index
        },
        collect: (monitor)=>({
                isDragging: monitor.isDragging()
            })
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        ref: ref,
        style: {
            opacity: opacity
        },
        children: children
    }, id);
};
$a2f075e1699eb7ef$var$Card.propTypes = {
    id: (0, $hgUW1$proptypes).string.isRequired,
    index: (0, $hgUW1$proptypes).number.isRequired,
    children: (0, $hgUW1$proptypes).node.isRequired,
    moveCard: (0, $hgUW1$proptypes).func.isRequired
};
var $a2f075e1699eb7ef$export$2e2bcd8739ae039 = $a2f075e1699eb7ef$var$Card;







const $b3cdb56addbaed9b$var$Modal = ({ nodeId: nodeId, children: children, closeText: closeText, closeIcon: closeIcon, openText: openText, title: title })=>{
    const [modalOpen, setModalOpen] = (0, $hgUW1$react).useState(false);
    const getNode = ()=>document.getElementById(nodeId);
    const titleId = title.replace(/\s/g, "_").toLowerCase();
    const popup = modalOpen ? /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$reactariamodal), {
        titleText: title,
        onExit: ()=>setModalOpen(false),
        getApplicationNode: getNode,
        initialFocus: `#dc-modal-${titleId}-close`,
        children: /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: "dc-modal",
            id: `dc-modal-${titleId}`,
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsxs)("header", {
                    className: "dc-modal-header",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
                            id: `dc-modal-${titleId}-header-title`,
                            className: "dc-modal-header-title",
                            children: title
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsxs)("button", {
                            type: "button",
                            id: `dc-modal-${titleId}-header-close`,
                            onClick: ()=>setModalOpen(false),
                            className: "dc-modal-close-button",
                            children: [
                                closeIcon,
                                closeText
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                    className: "dc-modal-body",
                    children: children
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)("footer", {
                    className: "dc-modal-footer",
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
                        type: "button",
                        id: `dc-modal-${titleId}-close`,
                        onClick: ()=>setModalOpen(false),
                        className: "dc-modal-close-button btn",
                        children: closeText
                    })
                })
            ]
        })
    }) : false;
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: "dc-modal-container",
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
                className: "dc-modal-open-button btn",
                id: `dc-modal-${titleId}-open`,
                type: "button",
                onClick: ()=>setModalOpen(!modalOpen),
                children: openText
            }),
            popup
        ]
    });
};
$b3cdb56addbaed9b$var$Modal.defaultProps = {
    closeIcon: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $431f685c2f6b35cd$export$2e2bcd8739ae039), {
        icon: "times"
    }),
    closeText: "Close Modal",
    openText: "Open Modal"
};
$b3cdb56addbaed9b$var$Modal.propTypes = {
    closeIcon: (0, $hgUW1$proptypes).node,
    title: (0, $hgUW1$proptypes).string.isRequired,
    closeText: (0, $hgUW1$proptypes).string,
    openText: (0, $hgUW1$proptypes).string,
    nodeId: (0, $hgUW1$proptypes).string.isRequired,
    children: (0, $hgUW1$proptypes).node.isRequired
};
var $b3cdb56addbaed9b$export$2e2bcd8739ae039 = $b3cdb56addbaed9b$var$Modal;


const $ef13b8053d863360$var$defaultCard = (card, index, moveCard)=>/*#__PURE__*/ (0, $hgUW1$jsx)((0, $a2f075e1699eb7ef$export$2e2bcd8739ae039), {
        index: index,
        id: card.id,
        column: card,
        moveCard: moveCard,
        children: /*#__PURE__*/ (0, $hgUW1$jsxs)("label", {
            htmlFor: card.id,
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)("input", {
                    id: card.id,
                    type: "checkbox",
                    defaultChecked: card.getIsVisible(),
                    onChange: ()=>card.toggleVisibility()
                }),
                " ",
                card.columnDef.header
            ]
        })
    }, card.id);
const $ef13b8053d863360$var$ManageColumns = ({ renderCard: renderCard, reactTable: reactTable })=>{
    const [cards, setCards] = (0, $hgUW1$useState)(null);
    (0, $hgUW1$react).useEffect(()=>{
        if (reactTable.getAllColumns().length && cards === null) setCards(reactTable.getAllColumns());
    }, [
        reactTable.getAllColumns()
    ]);
    const moveCard = (0, $hgUW1$react).useCallback((dragIndex, hoverIndex)=>{
        const newCards = cards.toSpliced(hoverIndex, 0, cards.splice(dragIndex, 1)[0]);
        setCards(newCards);
    }, [
        cards,
        reactTable.getAllColumns()
    ]);
    (0, $hgUW1$useEffect)(()=>{
        if (cards) reactTable.setColumnOrder(cards.map((d)=>d.id));
    }, [
        cards
    ]);
    return cards && cards.length && /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $b3cdb56addbaed9b$export$2e2bcd8739ae039), {
            title: "Manage Columns",
            nodeId: "___gatsby",
            openText: "Manage Columns",
            children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$DndProvider), {
                backend: (0, $hgUW1$HTML5Backend),
                children: cards && cards.map((column, i)=>renderCard(column, i, moveCard))
            })
        })
    });
};
$ef13b8053d863360$var$ManageColumns.defaultProps = {
    renderCard: $ef13b8053d863360$var$defaultCard
};
$ef13b8053d863360$var$ManageColumns.propTypes = {
    renderCard: (0, $hgUW1$proptypes).func
};
var $ef13b8053d863360$export$2e2bcd8739ae039 // Manage Columns - holds code
 // -- Modal is launched from Manage Columns with cards
 // -- -- Cards take children and Cards only adds the dnd feature
 = $ef13b8053d863360$var$ManageColumns;


/* eslint-disable */ 




class $1c2c1cd9518fa619$var$Menu extends (0, $hgUW1$Component) {
    render() {
        const heading = this.props.title ? this.props.title : "";
        const direction = this.props.horizontal ? "nav-horizontal" : "";
        const classes = `dc-menu ${this.props.className} ${direction}`;
        return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: classes,
            "aria-label": this.props.menuId,
            id: this.props.menuId,
            children: [
                heading ? /*#__PURE__*/ (0, $hgUW1$jsx)("h3", {
                    children: heading
                }) : "",
                /*#__PURE__*/ (0, $hgUW1$jsx)("ul", {
                    children: this.props.items.map(function(item, i) {
                        return (0, $hgUW1$validator).isURL(item.url) ? /*#__PURE__*/ (0, $hgUW1$jsx)("li", {
                            children: /*#__PURE__*/ (0, $hgUW1$jsx)("a", {
                                href: item.url,
                                target: item.target,
                                className: "dc-menu-item",
                                children: item.label
                            })
                        }, i) : /*#__PURE__*/ (0, $hgUW1$jsx)("li", {
                            children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Link), {
                                to: item.url,
                                target: item.target,
                                className: "dc-menu-item",
                                children: item.label
                            })
                        }, i);
                    })
                })
            ]
        });
    }
}
$1c2c1cd9518fa619$var$Menu.defaultProps = {
    items: [],
    className: "navigation-menu",
    target: "_top",
    menuId: "menu"
};
$1c2c1cd9518fa619$var$Menu.propTypes = {
    items: (0, $hgUW1$proptypes).any,
    className: (0, $hgUW1$proptypes).any,
    title: (0, $hgUW1$proptypes).string,
    horizontal: (0, $hgUW1$proptypes).bool,
    menuId: (0, $hgUW1$proptypes).string
};
var $1c2c1cd9518fa619$export$2e2bcd8739ae039 = $1c2c1cd9518fa619$var$Menu;








const $2aa67f963fc9e19e$var$NavBar = ({ navItems: navItems, expand: expand, defaultStyling: defaultStyling, customClasses: customClasses })=>{
    const [isOpen, toggleOpen] = (0, $hgUW1$useState)(false);
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: ` ${defaultStyling ? " dc-main-navigation base-styles" : ""}`,
        children: [
            expand && /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Navbar), {
                expand: "md",
                className: customClasses,
                container: false,
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                        className: "dc-toggle",
                        children: /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$NavbarToggler), {
                            onClick: ()=>toggleOpen(!isOpen),
                            children: [
                                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$FontAwesomeIcon), {
                                    icon: [
                                        "fas",
                                        "bars"
                                    ],
                                    "aria-hidden": "true",
                                    role: "presentation"
                                }),
                                /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                                    className: "sr-only",
                                    children: "Menu"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Collapse), {
                        isOpen: isOpen,
                        navbar: true,
                        children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Nav), {
                            className: "mr-auto",
                            children: navItems.map((item, index)=>/*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$NavItem), {
                                    children: item
                                }, index))
                        })
                    })
                ]
            }),
            !expand && /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Navbar), {
                expand: false,
                className: customClasses,
                children: /*#__PURE__*/ (0, $hgUW1$jsx)("ul", {
                    children: navItems.map((item, index)=>/*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$NavItem), {
                            children: item
                        }, index))
                })
            })
        ]
    });
};
$2aa67f963fc9e19e$var$NavBar.defaultProps = {
    defaultStyling: true,
    expand: true,
    customClasses: ""
};
$2aa67f963fc9e19e$var$NavBar.propTypes = {
    customClasses: (0, $hgUW1$proptypes).string,
    defaultStyling: (0, $hgUW1$proptypes).bool,
    expand: (0, $hgUW1$proptypes).bool,
    navItems: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).string).isRequired
};
var $2aa67f963fc9e19e$export$2e2bcd8739ae039 = $2aa67f963fc9e19e$var$NavBar;










const $d93a461f8e2ae648$var$PublisherDatasetCountByName = (props)=>{
    const { name: name, searchUrl: searchUrl, datasetCount: datasetCount } = props;
    const link = searchUrl ? searchUrl : `/search/?publisher__name=${name}`;
    let str;
    if (datasetCount) str = datasetCount === 1 ? "1 dataset" : `${datasetCount} datasets`;
    else str = "datasets";
    return /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Link), {
        to: link,
        className: "publisher-datasets-link",
        alt: "Publisher datasets",
        children: str
    });
};
var $d93a461f8e2ae648$export$2e2bcd8739ae039 = $d93a461f8e2ae648$var$PublisherDatasetCountByName;
$d93a461f8e2ae648$var$PublisherDatasetCountByName.propTypes = {
    name: (0, $hgUW1$proptypes).string,
    searchUrl: (0, $hgUW1$proptypes).string,
    datasetCount: (0, $hgUW1$proptypes).string
};



const $7c9d8ba2cb4237d4$var$Organization = ({ name: name, description: description, imageUrl: imageUrl, searchUrl: searchUrl, alignment: alignment, organizationEndpoint: organizationEndpoint })=>{
    const image = /*#__PURE__*/ (0, $hgUW1$jsx)("img", {
        alt: name || "Organization Image",
        src: imageUrl
    });
    const link = searchUrl ? searchUrl : `/search/?publisher__name=${name}`;
    const endpoint = organizationEndpoint ? organizationEndpoint.replace("api/1", "data.json") : null;
    const { data: data } = endpoint ? (0, $hgUW1$useQuery)({
        queryKey: [
            "organization"
        ],
        queryFn: ()=>{
            return fetch(endpoint).then((res)=>res.json());
        }
    }) : {
        data: undefined
    };
    if (!endpoint) console.log("No search endpoint defined for Organization/s, so no dataset info available.");
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: "dc-org-block",
        style: {
            textAlign: alignment
        },
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Link), {
                to: link,
                className: "dc-org-image",
                alt: "Organization Logo",
                children: [
                    image,
                    /*#__PURE__*/ (0, $hgUW1$jsx)("h3", {
                        className: "dc-org-name",
                        children: name
                    })
                ]
            }),
            description && /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "dc-org-description",
                children: description
            }),
            data && data.dataset !== "undefined" ? /*#__PURE__*/ (0, $hgUW1$jsx)((0, $d93a461f8e2ae648$export$2e2bcd8739ae039), {
                name: name,
                datasetCount: $7c9d8ba2cb4237d4$export$25a7b9c72833f16c(name, data.dataset)
            }) : /*#__PURE__*/ (0, $hgUW1$jsx)((0, $d93a461f8e2ae648$export$2e2bcd8739ae039), {
                name: name
            })
        ]
    });
};
const $7c9d8ba2cb4237d4$export$25a7b9c72833f16c = (publisher, datasets)=>{
    const publishers = datasets.map((data, index, arr)=>{
        return data.publisher;
    });
    const result = publishers.filter((p)=>{
        return p.name === publisher;
    });
    if (typeof result !== "undefined" && result.length) return result.length;
    return null;
};
$7c9d8ba2cb4237d4$var$Organization.defaultProps = {
    alignment: "center",
    name: "",
    description: "",
    imageUrl: "https://s3.amazonaws.com/dkan-default-content-files/files/group.png"
};
$7c9d8ba2cb4237d4$var$Organization.propTypes = {
    alignment: (0, $hgUW1$proptypes).string,
    name: (0, $hgUW1$proptypes).string,
    description: (0, $hgUW1$proptypes).string,
    imageUrl: (0, $hgUW1$proptypes).string,
    searchUrl: (0, $hgUW1$proptypes).string,
    organizationEndpoint: (0, $hgUW1$proptypes).string
};
var $7c9d8ba2cb4237d4$export$2e2bcd8739ae039 = $7c9d8ba2cb4237d4$var$Organization;





const $29583c79cf157ed1$var$PageHeader = ({ title: title })=>/*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        children: /*#__PURE__*/ (0, $hgUW1$jsx)("h1", {
            children: title
        })
    });
$29583c79cf157ed1$var$PageHeader.propTypes = {
    title: (0, $hgUW1$proptypes).string.isRequired
};
var $29583c79cf157ed1$export$2e2bcd8739ae039 = $29583c79cf157ed1$var$PageHeader;






function $824049430e5a4d5d$var$PublisherList(props) {
    const { items: items, className: className, organizationEndpoint: organizationEndpoint } = props;
    let content = /*#__PURE__*/ (0, $hgUW1$jsx)("div", {});
    if (items) content = props.items.map((item)=>/*#__PURE__*/ (0, $hgUW1$jsx)((0, $7c9d8ba2cb4237d4$export$2e2bcd8739ae039), {
            name: item.name,
            imageUrl: item.imageUrl,
            description: item.description,
            organizationEndpoint: organizationEndpoint,
            searchUrl: item.searchUrl,
            alignment: item.alignment
        }, item.identifier));
    return /*#__PURE__*/ (0, $hgUW1$jsx)("ul", {
        className: `dc-publisher-list ${className}`,
        children: content
    });
}
$824049430e5a4d5d$var$PublisherList.defaultProps = {
    className: ""
};
$824049430e5a4d5d$var$PublisherList.propTypes = {
    items: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).shape({
        alignment: (0, $hgUW1$proptypes).string,
        name: (0, $hgUW1$proptypes).string,
        description: (0, $hgUW1$proptypes).string,
        identifier: (0, $hgUW1$proptypes).string,
        imageUrl: (0, $hgUW1$proptypes).string,
        searchUrl: (0, $hgUW1$proptypes).string,
        organizationEndpoint: (0, $hgUW1$proptypes).string
    })).isRequired,
    className: (0, $hgUW1$proptypes).string
};
var $824049430e5a4d5d$export$2e2bcd8739ae039 = $824049430e5a4d5d$var$PublisherList;












function $e2e70cb6f01534a9$var$ColumnFilter({ column: column, count: count }) {
    const [inputValue, setInputValue] = (0, $hgUW1$useState)(column.getFilterValue() || "");
    (0, $hgUW1$useEffect)(()=>{
        const delayedInputTimeout = setTimeout(()=>{
            column.setFilterValue(inputValue || "");
        }, 500);
        return ()=>clearTimeout(delayedInputTimeout);
    }, [
        inputValue,
        500
    ]);
    return /*#__PURE__*/ (0, $hgUW1$jsx)("input", {
        "aria-label": column.columnDef.header,
        value: inputValue,
        onChange: (e)=>{
            setInputValue(e.target.value || "");
        },
        placeholder: `Search ${count} records...`
    });
}
var $e2e70cb6f01534a9$export$2e2bcd8739ae039 = $e2e70cb6f01534a9$var$ColumnFilter;











const $80704d31b757107d$var$DataTableHeader = ({ reactTable: reactTable, total: total, setDensity: setDensity })=>{
    const columns = reactTable.getAllColumns();
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: "dc-datatable-header",
        children: reactTable && /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Fragment), {
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $10d756273efdc2df$export$2e2bcd8739ae039), {
                    total: total
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $f88ff4b566e98b40$export$2e2bcd8739ae039), {
                    id: ""
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $af3fcd719f41850c$export$2e2bcd8739ae039), {
                    densityChange: (density)=>setDensity(density),
                    items: [
                        {
                            icon: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $431f685c2f6b35cd$export$2e2bcd8739ae039), {
                                icon: "density-1",
                                name: "density-1",
                                fill: "#666666",
                                height: 20,
                                width: 20
                            }),
                            text: "expanded",
                            value: "density-1"
                        },
                        {
                            icon: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $431f685c2f6b35cd$export$2e2bcd8739ae039), {
                                icon: "density-2",
                                name: "density-2",
                                fill: "#666666",
                                height: 20,
                                width: 20
                            }),
                            text: "normal",
                            value: "density-2"
                        },
                        {
                            icon: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $431f685c2f6b35cd$export$2e2bcd8739ae039), {
                                icon: "density-3",
                                name: "density-3",
                                fill: "#666666",
                                height: 20,
                                width: 20
                            }),
                            text: "tight",
                            value: "density-3"
                        }
                    ]
                }),
                columns ? /*#__PURE__*/ (0, $hgUW1$jsx)((0, $ef13b8053d863360$export$2e2bcd8739ae039), {
                    reactTable: reactTable
                }) : ""
            ]
        })
    });
};
var $80704d31b757107d$export$2e2bcd8739ae039 = $80704d31b757107d$var$DataTableHeader;


const $f90b41de1e4926f3$var$DataTable = ({ data: data, columns: columns })=>{
    const { dispatch: dispatch, resourceState: resourceState } = (0, $hgUW1$useContext)((0, $33221421d2520c36$export$a0d1f3f5fa057587));
    const [ariaLiveFeedback, setAriaLiveFeedback] = (0, $hgUW1$useState)("");
    const [columnResizing, setColumnResizing] = (0, $hgUW1$useState)("");
    const [columnOrder, setColumnOrder] = (0, $hgUW1$useState)(resourceState.columnOrder);
    (0, $hgUW1$useEffect)(()=>{
        if (JSON.stringify(columnOrder) != JSON.stringify(resourceState.columnOrder)) dispatch({
            type: "REORDER_COLUMNS",
            data: {
                columnOrder: columnOrder
            }
        });
    }, [
        columnOrder
    ]);
    const [columnVisibility, setColumnVisibility] = (0, $hgUW1$useState)(resourceState.columnVisibility);
    (0, $hgUW1$useEffect)(()=>{
        if (JSON.stringify(columnVisibility) != JSON.stringify(resourceState.columnVisibility)) dispatch({
            type: "COLUMN_VISIBILITY",
            data: {
                columnVisibility: columnVisibility
            }
        });
    }, [
        columnVisibility
    ]);
    const [sorting, setSorting] = (0, $hgUW1$useState)(resourceState.sort);
    (0, $hgUW1$useEffect)(()=>{
        if (JSON.stringify(sorting) != JSON.stringify(resourceState.sort)) dispatch({
            type: "UPDATE_COLUMN_SORT",
            data: {
                sort: sorting
            }
        });
    }, [
        sorting
    ]);
    const [columnFilters, setColumnFilters] = (0, $hgUW1$useState)(resourceState.filters);
    (0, $hgUW1$useEffect)(()=>{
        if (JSON.stringify(columnFilters) != JSON.stringify(resourceState.filters)) dispatch({
            type: "UPDATE_FILTERS",
            data: {
                columnFilters: columnFilters
            }
        });
    }, [
        columnFilters
    ]);
    const [density, setDensity] = (0, $hgUW1$useState)(resourceState.density);
    const densityClassName = density ? `${density} -striped -highlight` : "-striped -highlight";
    const columnHelper = (0, $hgUW1$createColumnHelper)();
    const table_columns = columns.map((col)=>{
        if (col.cell) return columnHelper.accessor(col.accessor, {
            header: col.header,
            cell: col.cell,
            minSize: 215
        });
        return columnHelper.accessor(col.accessor, {
            header: col.header,
            minSize: 215
        });
    });
    // reorder based on state
    if (resourceState.columnOrder.length) table_columns.sort((a, b)=>{
        return resourceState.columnOrder.indexOf(a.header) - resourceState.columnOrder.indexOf(b.header);
    });
    const reactTable = (0, $hgUW1$useReactTable)({
        data: data.results,
        columns: table_columns,
        columnResizeMode: "onChange",
        manualSorting: true,
        onSortingChange: setSorting,
        onColumnOrderChange: setColumnOrder,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        initialState: {
            columnOrder: columnOrder,
            pagination: {
                pageSize: resourceState.pageSize,
                pageCount: Number(Math.ceil(data.count / resourceState.pageSize))
            }
        },
        state: {
            columnOrder: columnOrder,
            columnVisibility: columnVisibility,
            columnFilters: columnFilters,
            sorting: sorting
        },
        getCoreRowModel: (0, $hgUW1$getCoreRowModel)(),
        getSortedRowModel: (0, $hgUW1$getSortedRowModel)(),
        getFilteredRowModel: (0, $hgUW1$getFilteredRowModel)(),
        debugTable: false,
        autoResetPageIndex: false
    });
    const headerGroups = reactTable.getHeaderGroups();
    const sortIcon = (isSorted)=>{
        if (isSorted === "asc") return "sort-up";
        if (isSorted === "desc") return "sort-down";
        return "sort";
    };
    const pageCount = Number(Math.ceil(data.count / resourceState.pageSize));
    return /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Fragment), {
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $80704d31b757107d$export$2e2bcd8739ae039), {
                reactTable: reactTable,
                total: data.count,
                setDensity: setDensity
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "dc-overflow",
                children: /*#__PURE__*/ (0, $hgUW1$jsxs)("table", {
                    className: `dc-datatable -striped -highlight ${densityClassName}`,
                    style: {
                        width: reactTable.getCenterTotalSize()
                    },
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("thead", {
                            className: "dc-thead -header",
                            children: columns.length && headerGroups.map((headerGroup)=>/*#__PURE__*/ (0, $hgUW1$jsx)("tr", {
                                    role: "row",
                                    className: "tr",
                                    children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, $hgUW1$jsxs)("th", {
                                            key: header.id,
                                            style: {
                                                width: header.getSize(),
                                                position: "relative"
                                            },
                                            title: header.column.columnDef.header,
                                            className: "ds-u-border-y--2 ds-u-padding--2 ds-u-border--dark  ds-u-font-weight--bold dc-c-table-header-cell",
                                            children: [
                                                /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                                                    className: "dc-sort",
                                                    children: [
                                                        /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                                                            style: {
                                                                maxWidth: header.getSize() - 16
                                                            },
                                                            children: header.isPlaceholder ? null : (0, $hgUW1$flexRender)(header.column.columnDef.header, header.getContext())
                                                        }),
                                                        /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
                                                            onClick: header.column.getToggleSortingHandler(),
                                                            "aria-label": `${header.column.columnDef.header} sort order`,
                                                            children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$FontAwesomeIcon), {
                                                                icon: [
                                                                    "fas",
                                                                    sortIcon(header.column.getIsSorted())
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                header.column.getCanFilter() ? /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                                                    className: "dc-filter",
                                                    children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $e2e70cb6f01534a9$export$2e2bcd8739ae039), {
                                                        column: header.column,
                                                        count: data.results.length
                                                    })
                                                }) : null,
                                                /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
                                                    onMouseDown: header.getResizeHandler(),
                                                    onTouchStart: header.getResizeHandler(),
                                                    className: `dc-c-resize-handle ${header.column.getIsResizing() || header.column.id == columnResizing ? "isResizing" : ""}`,
                                                    "aria-label": `Resize ${header.column.columnDef.header} column`,
                                                    onKeyDown: (e)=>{
                                                        const columnSizingObject = reactTable.getState().columnSizing;
                                                        switch(e.key){
                                                            case "Enter":
                                                            case " ":
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                if (columnResizing) {
                                                                    // end resizing
                                                                    setColumnResizing("");
                                                                    setAriaLiveFeedback(`${header.column.columnDef.header} dropped.`);
                                                                } else {
                                                                    // start resizing
                                                                    setColumnResizing(header.column.id);
                                                                    setAriaLiveFeedback(`${header.column.columnDef.header} grabbed.`);
                                                                }
                                                                break;
                                                            case "Escape":
                                                                if (columnResizing) {
                                                                    setColumnResizing("");
                                                                    setAriaLiveFeedback(`${header.column.columnDef.header} dropped.`);
                                                                }
                                                                break;
                                                            case "ArrowRight":
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                if (columnResizing) {
                                                                    columnSizingObject[header.column.id] = header.getSize() + 10;
                                                                    reactTable.setColumnSizing(columnSizingObject);
                                                                    setAriaLiveFeedback(`${header.column.columnDef.header} has been resized. The new width is ${header.getSize()} pixels.`);
                                                                }
                                                                break;
                                                            case "ArrowLeft":
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                if (columnResizing) {
                                                                    columnSizingObject[header.column.id] = header.getSize() - 10;
                                                                    reactTable.setColumnSizing(columnSizingObject);
                                                                    setAriaLiveFeedback(`${header.column.columnDef.header} has been resized. The new width is ${header.getSize()} pixels.`);
                                                                }
                                                                break;
                                                        }
                                                    },
                                                    onBlur: ()=>{
                                                        setColumnResizing("");
                                                    }
                                                })
                                            ]
                                        }))
                                }, "header"))
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("tbody", {
                            className: "dc-tbody",
                            children: reactTable.getRowModel().rows.map((row, index)=>{
                                const even = (index + 1) % 2 === 0;
                                return /*#__PURE__*/ (0, $hgUW1$jsx)("tr", {
                                    className: `${even ? "dc-c-datatable--even-row" : ""}`,
                                    children: row.getVisibleCells().map((cell)=>{
                                        return /*#__PURE__*/ (0, $hgUW1$jsx)("td", {
                                            key: cell.id,
                                            style: {
                                                maxWidth: cell.column.getSize()
                                            },
                                            className: `td dc-td`,
                                            children: (0, $hgUW1$flexRender)(cell.column.columnDef.cell, cell.getContext())
                                        });
                                    })
                                }, row.id);
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "sr-only",
                "aria-live": "assertive",
                "aria-atomic": "true",
                children: ariaLiveFeedback
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "pagination-bottom",
                children: /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                    className: "-pagination",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                            className: "-previous",
                            children: /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
                                type: "button",
                                onClick: ()=>dispatch({
                                        type: "UPDATE_PAGE",
                                        data: {
                                            page: Number(resourceState.currentPage) - 1
                                        }
                                    }),
                                disabled: resourceState.currentPage === 0,
                                className: "-btn",
                                children: "<"
                            })
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                            className: "-center",
                            children: /*#__PURE__*/ (0, $hgUW1$jsxs)("span", {
                                className: "-pageInfo",
                                children: [
                                    "Page",
                                    " ",
                                    /*#__PURE__*/ (0, $hgUW1$jsxs)("strong", {
                                        children: [
                                            resourceState.currentPage + 1,
                                            " ",
                                            "of",
                                            " ",
                                            pageCount
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                            className: "-next",
                            children: /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
                                type: "button",
                                onClick: ()=>dispatch({
                                        type: "UPDATE_PAGE",
                                        data: {
                                            page: Number(resourceState.currentPage) + 1
                                        }
                                    }),
                                disabled: resourceState.currentPage >= pageCount - 1,
                                className: "-btn",
                                children: ">"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
var $f90b41de1e4926f3$export$2e2bcd8739ae039 = $f90b41de1e4926f3$var$DataTable;


// Build columns in correct structure for Datatable component.
function $d66b16e18f8b1cbb$export$1147582dfae658c6(columns) {
    return columns.map((column)=>({
            header: column,
            id: column,
            accessor: column
        }));
}
function $d66b16e18f8b1cbb$export$404b2d77e062e408(filters) {
    let params = "";
    filters.forEach((filter, index)=>{
        let param = `&conditions[${index}][property]=${filter.id}&conditions[${index}][value]=${filter.value}&conditions[${index}][operator]=contains`;
        params += param;
    });
    return params;
}


function $dd329ea157b12b02$export$2e2bcd8739ae039(state, action) {
    console.log(action);
    switch(action.type){
        case "UPDATE_PAGE":
            return {
                ...state,
                currentPage: action.data.page,
                updateQuery: true
            };
        case "UPDATE_FILTERS":
            return {
                ...state,
                filters: action.data.columnFilters,
                currentPage: 0,
                updateQuery: true
            };
        case "UPDATE_PAGE_SIZE":
            return {
                ...state,
                pageSize: Number(action.data.pageSize),
                currentPage: 0,
                updateQuery: true
            };
        case "UPDATE_COLUMN_SORT":
            return {
                ...state,
                sort: action.data.sort,
                updateQuery: true
            };
        case "REORDER_COLUMNS":
            return {
                ...state,
                columnOrder: action.data.columnOrder,
                updateQuery: true
            };
        case "COLUMN_VISIBILITY":
            return {
                ...state,
                columnVisibility: action.data.columnVisibility,
                updateQuery: true
            };
        default:
            return "Not a valid action type.";
    }
}



const $0284d3cdff4d76f1$var$Resource = ({ apiURL: apiURL, id: id, format: format, downloadURL: downloadURL, accessURL: accessURL })=>{
    const [resourceState, dispatch] = (0, $hgUW1$useReducer)((0, $dd329ea157b12b02$export$2e2bcd8739ae039), (0, $33221421d2520c36$export$b63dc320f5671cb));
    const filterParams = (0, $d66b16e18f8b1cbb$export$404b2d77e062e408)(resourceState.filters);
    const sort = resourceState.sort.length ? `&sorts[0][property]=${resourceState.sort[0].id}&sorts[0][order]=${resourceState.sort[0].desc ? "desc" : "asc"}` : "";
    const { data: data } = (0, $hgUW1$useQuery)({
        queryKey: [
            "datastore",
            id + filterParams + resourceState.currentPage + resourceState.pageSize + sort
        ],
        queryFn: ()=>{
            return fetch(`${apiURL}/datastore/query/${id}?limit=${resourceState.pageSize}&offset=${resourceState.currentPage * resourceState.pageSize}${filterParams}${sort}`).then((res)=>res.json());
        }
    });
    const columns = data && data.schema ? Object.keys(data.schema[id].fields) : [];
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        id: "resource",
        children: data && data.results ? /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $33221421d2520c36$export$a0d1f3f5fa057587).Provider, {
            value: {
                dispatch: dispatch,
                resourceState: resourceState
            },
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $110e95b095a6296a$export$2e2bcd8739ae039), {
                    title: "test",
                    label: downloadURL,
                    format: format,
                    downloadURL: downloadURL ? downloadURL : accessURL
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $f90b41de1e4926f3$export$2e2bcd8739ae039), {
                    data: data,
                    columns: (0, $d66b16e18f8b1cbb$export$1147582dfae658c6)(columns)
                })
            ]
        }) : ""
    });
};
$0284d3cdff4d76f1$var$Resource.defaultProps = {
    showDBColumnNames: false
};
$0284d3cdff4d76f1$var$Resource.propTypes = {
    apiURL: (0, $hgUW1$proptypes).string.isRequired,
    showDBColumnNames: (0, $hgUW1$proptypes).bool
};
var $0284d3cdff4d76f1$export$2e2bcd8739ae039 = $0284d3cdff4d76f1$var$Resource;













// Since all facets are kept in one array, this function serves two purposes:
// Without a facetKey it will just return an empty array for all facets.
// With a facetKey it will just return all facets not matching the facetKey.
function $54f7ba894c2d6b35$export$e858af1f2c67c762(selectedFacets, facetKey = null) {
    let updatedFacets = [];
    if (selectedFacets !== undefined && selectedFacets.length > 0) updatedFacets = selectedFacets;
    if (facetKey) updatedFacets = updatedFacets.filter((facet)=>{
        if (facet[0].toLowerCase() !== facetKey.toLowerCase()) return facet;
        return false;
    });
    else updatedFacets = [];
    return {
        type: "RESET_FACETS",
        data: {
            selectedFacets: updatedFacets
        }
    };
}
function $54f7ba894c2d6b35$export$ac0ce5717826b59c(queryParams, defaultFacets) {
    const facetKeys = Object.keys(defaultFacets);
    const paramFacetArray = Object.entries(queryParams).filter((obj)=>{
        for(let i = 0; i < facetKeys.length; i += 1)if (facetKeys[i].toLowerCase() === obj[0].toLowerCase()) {
            const newFacetArray = obj[1].split(",").map((param)=>[
                    obj[0].toLowerCase(),
                    param
                ]);
            return newFacetArray;
        }
        return false;
    });
    return paramFacetArray;
}
function $54f7ba894c2d6b35$export$2f1909273c0eb60f(value, options) {
    const newSort = options.filter((opt)=>opt.field === value);
    return {
        type: "UPDATE_SORT",
        data: {
            sort: newSort[0].field,
            "sort-order": newSort[0].order
        }
    };
}






function $e64599ce267cd2f7$export$2e2bcd8739ae039({ customId: customId, className: className, title: title, children: children, headingClasses: headingClasses, innerClasses: innerClasses, allowToggle: allowToggle, defaultClosed: defaultClosed }) {
    const [show, toggleShow] = (0, $hgUW1$useState)(!defaultClosed);
    let toggleBlockHeading = /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
        className: headingClasses,
        children: title
    });
    if (allowToggle) toggleBlockHeading = /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
        className: headingClasses,
        children: /*#__PURE__*/ (0, $hgUW1$jsxs)("button", {
            type: "button",
            onClick: ()=>toggleShow(!show),
            "aria-expanded": show,
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$FontAwesomeIcon), {
                    icon: [
                        "fas",
                        show ? "chevron-down" : "chevron-right"
                    ],
                    size: "1x",
                    "aria-hidden": "true",
                    role: "presentation"
                }),
                title
            ]
        })
    });
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        id: customId,
        className: `${className} ${show ? "open" : "closed"}`,
        "data-testid": "toggle-wrapper",
        children: [
            toggleBlockHeading,
            show && /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: innerClasses,
                "data-testid": "toggle-inner",
                children: children
            })
        ]
    });
}
$e64599ce267cd2f7$export$2e2bcd8739ae039.defaultProps = {
    customId: undefined,
    allowToggle: true,
    headingClasses: "toggle-block-title",
    innerClasses: "toggle-block-inner",
    className: "toggle-block",
    defaultClosed: false
};
$e64599ce267cd2f7$export$2e2bcd8739ae039.propTypes = {
    customId: (0, $hgUW1$proptypes).string,
    title: (0, $hgUW1$proptypes).node.isRequired,
    children: (0, $hgUW1$proptypes).node.isRequired,
    headingClasses: (0, $hgUW1$proptypes).string,
    innerClasses: (0, $hgUW1$proptypes).string,
    allowToggle: (0, $hgUW1$proptypes).bool,
    className: (0, $hgUW1$proptypes).string,
    defaultClosed: (0, $hgUW1$proptypes).bool
};





function $3b217581c5ae5543$export$2e2bcd8739ae039({ container: container, items: items, limit: limit, btnOpenText: btnOpenText, btnClosedText: btnClosedText, containerClasses: containerClasses, wrapperClasses: wrapperClasses, onMore: onMore, onLess: onLess }) {
    const [showMore, toggleShowMore] = (0, $hgUW1$useState)(false);
    let showMoreButton = /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
        type: "button",
        className: "showmore-button",
        onClick: ()=>{
            if (onLess) onLess();
            toggleShowMore(!showMore);
        },
        children: btnOpenText || "Show less"
    });
    const totalItems = items.length;
    const visibleItems = items.filter((item, index)=>{
        if (!showMore && index >= limit) return false;
        return item;
    });
    const btnText = btnClosedText || `Show ${totalItems - visibleItems.length} more`;
    if (!showMore) showMoreButton = /*#__PURE__*/ (0, $hgUW1$jsx)("button", {
        type: "button",
        className: "showmore-button",
        onClick: ()=>{
            if (onMore) onMore();
            toggleShowMore(!showMore);
        },
        children: btnText
    });
    if (totalItems - limit <= 0) showMoreButton = null;
    switch(container){
        case "ol":
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                className: wrapperClasses,
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("ol", {
                        className: containerClasses,
                        children: visibleItems
                    }),
                    showMoreButton
                ]
            });
        case "ul":
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                className: wrapperClasses,
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("ul", {
                        className: containerClasses,
                        children: visibleItems
                    }),
                    showMoreButton
                ]
            });
        case "div":
        default:
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                className: wrapperClasses,
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                        className: containerClasses,
                        children: visibleItems
                    }),
                    showMoreButton
                ]
            });
    }
}
$3b217581c5ae5543$export$2e2bcd8739ae039.defaultProps = {
    btnOpenText: "",
    btnClosedText: "",
    limit: 10,
    container: "div",
    containerClasses: "show-more-container",
    wrapperClasses: "show-more-wrapper"
};
$3b217581c5ae5543$export$2e2bcd8739ae039.propTypes = {
    container: (0, $hgUW1$proptypes).oneOf([
        "div",
        "ol",
        "ul"
    ]),
    items: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).node).isRequired,
    limit: (0, $hgUW1$proptypes).number,
    btnOpenText: (0, $hgUW1$proptypes).string,
    btnClosedText: (0, $hgUW1$proptypes).string,
    containerClasses: (0, $hgUW1$proptypes).string,
    wrapperClasses: (0, $hgUW1$proptypes).string
};


(0, $hgUW1$library).add((0, $hgUW1$fas));
const $5726fc67340cb5d4$var$SearchFacet = ({ facetType: facetType, label: label, facets: facets, dispatch: dispatch, selected: selected, toggleClasses: toggleClasses, InputComponent: InputComponent, reset: { active: resetActive, icon: resetIcon }, selectedFacets: selectedFacets, inputType: inputType, onMore: onMore, onLess: onLess })=>{
    let myLabel = "";
    if (!label) myLabel = facetType;
    else myLabel = label;
    const choices = facets.map((item)=>{
        const itemName = item.name;
        const itemTotal = item.total;
        const key = `${facetType.toLowerCase()}-${itemName.replace(/\s/g, "")}-${Math.random() * 100}`;
        const checked = selected.filter((selectedFacet)=>selectedFacet === itemName).length > 0 || false;
        const onChangeFunction = (e)=>{
            const { value: value } = e.target;
            const found = selected.indexOf(value);
            if (found > -1) selected.splice(found, 1);
            else selected.push(value);
            const newFacet = [
                facetType,
                value
            ];
            if (inputType === "radio") return dispatch({
                type: "RESET_FACETS",
                data: {
                    selectedFacets: [
                        ...selectedFacets.filter(([type])=>type !== facetType),
                        newFacet
                    ]
                }
            });
            dispatch({
                type: "UPDATE_FACETS",
                data: {
                    newFacet: newFacet
                }
            });
        };
        if (InputComponent) return /*#__PURE__*/ (0, $hgUW1$jsx)(InputComponent, {
            checked: checked,
            name: facetType,
            type: inputType,
            value: itemName,
            onChange: onChangeFunction,
            children: `${itemName} (${itemTotal})`
        }, key);
        return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: "dc-facet-option",
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Input), {
                    checked: checked,
                    id: key,
                    name: facetType,
                    type: inputType,
                    value: itemName,
                    onChange: onChangeFunction
                }),
                /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Label), {
                    htmlFor: key,
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$FontAwesomeIcon), {
                            icon: [
                                "fas",
                                checked ? "check-square" : "square"
                            ],
                            size: "1x",
                            "aria-hidden": "true",
                            role: "presentation"
                        }),
                        `${itemName} (${itemTotal})`
                    ]
                })
            ]
        }, key);
    });
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: "dc-search-facet-container",
        children: [
            resetActive && !(0, $hgUW1$isEmpty)(selected) ? /*#__PURE__*/ (0, $hgUW1$jsxs)("button", {
                type: "button",
                onClick: ()=>dispatch((0, $54f7ba894c2d6b35$export$e858af1f2c67c762)(selectedFacets, facetType)),
                className: "facet-reset-button",
                children: [
                    resetIcon && /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                        className: "undo-icon",
                        children: resetIcon
                    }),
                    "Reset"
                ]
            }) : null,
            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $e64599ce267cd2f7$export$2e2bcd8739ae039), {
                // TODO: Fix this so it's adjustable
                title: /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                    children: myLabel
                }),
                headingClasses: `facet-block-${facetType}-inner${toggleClasses ? ` ${toggleClasses}` : ""}`,
                innerClasses: `inner-${facetType}-facets`,
                children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $3b217581c5ae5543$export$2e2bcd8739ae039), {
                    container: "div",
                    items: choices,
                    limit: 10,
                    onMore: onMore,
                    onLess: onLess
                })
            }, facetType)
        ]
    });
};
$5726fc67340cb5d4$var$SearchFacet.defaultProps = {
    label: "",
    selected: [],
    toggleClasses: null,
    InputComponent: null,
    selectedFacets: [],
    reset: {
        active: false
    },
    inputType: "checkbox"
};
$5726fc67340cb5d4$var$SearchFacet.propTypes = {
    facetType: (0, $hgUW1$proptypes).string.isRequired,
    facets: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).arrayOf).isRequired,
    dispatch: (0, $hgUW1$proptypes).func.isRequired,
    label: (0, $hgUW1$proptypes).string,
    selected: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).arrayOf),
    toggleClasses: (0, $hgUW1$proptypes).string,
    InputComponent: (0, $hgUW1$proptypes).func,
    selectedFacets: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).array),
    reset: (0, $hgUW1$proptypes).shape({
        active: (0, $hgUW1$proptypes).bool,
        icon: (0, $hgUW1$proptypes).func
    }),
    inputType: (0, $hgUW1$proptypes).string,
    onMore: (0, $hgUW1$proptypes).func,
    onLess: (0, $hgUW1$proptypes).func
};
var $5726fc67340cb5d4$export$2e2bcd8739ae039 = $5726fc67340cb5d4$var$SearchFacet;


const $5c399e82a5ecd2ed$var$SearchFacets = ({ facetsConfig: facetsConfig, facetsResults: facetsResults, selectedFacets: selectedFacets, dispatch: dispatch, className: className, toggleClasses: toggleClasses, InputComponent: InputComponent, onMore: onMore, onLess: onLess })=>{
    const facetList = Object.entries(facetsConfig);
    const facetComponents = facetList.map((facetInfo)=>{
        const facetType = facetInfo[0];
        const facets = facetsResults.filter((facetItem)=>facetItem.type === facetType);
        const selected = selectedFacets.filter((item)=>item[0] === facetType).map((item)=>item[1]);
        return /*#__PURE__*/ (0, $hgUW1$jsx)((0, $5726fc67340cb5d4$export$2e2bcd8739ae039), {
            facetType: facetType,
            label: facetInfo[1].label,
            facets: facets,
            dispatch: dispatch,
            selected: selected,
            toggleClasses: toggleClasses,
            InputComponent: InputComponent,
            reset: facetInfo[1].reset,
            selectedFacets: selectedFacets,
            inputType: facetInfo[1].inputType,
            onMore: onMore,
            onLess: onLess
        }, facetType);
    });
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: className,
        children: facetComponents
    });
};
$5c399e82a5ecd2ed$var$SearchFacets.defaultProps = {
    className: "dc-search-facets",
    selectedFacets: [],
    toggleClasses: null,
    InputComponent: null
};
$5c399e82a5ecd2ed$var$SearchFacets.propTypes = {
    facetsConfig: (0, $hgUW1$proptypes).objectOf((0, $hgUW1$proptypes).object).isRequired,
    facetsResults: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).object).isRequired,
    dispatch: (0, $hgUW1$proptypes).func.isRequired,
    selectedFacets: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).array),
    className: (0, $hgUW1$proptypes).string,
    toggleClasses: (0, $hgUW1$proptypes).string,
    InputComponent: (0, $hgUW1$proptypes).func,
    onMore: (0, $hgUW1$proptypes).func,
    onLess: (0, $hgUW1$proptypes).func
};
var $5c399e82a5ecd2ed$export$2e2bcd8739ae039 = $5c399e82a5ecd2ed$var$SearchFacets;








const $bdb071ea3a6d3466$var$SearchInput = ({ className: className, labelContent: labelContent, onChangeFunction: onChangeFunction, placeholder: placeholder, value: value, bsSize: bsSize, labelClassName: labelClassName, srOnly: srOnly, resetContent: resetContent, submitContent: submitContent, showSubmit: showSubmit, showReset: showReset })=>{
    const [searchQuery, setSearchQuery] = (0, $hgUW1$useState)(value);
    (0, $hgUW1$useEffect)(()=>{
        if (value === "") setSearchQuery(value);
    }, [
        value
    ]);
    (0, $hgUW1$useEffect)(()=>{
        const timer = setTimeout(()=>{
            if (searchQuery !== value) onChangeFunction({
                type: "UPDATE_FULLTEXT",
                data: {
                    fulltext: searchQuery,
                    page: 1
                }
            });
        }, 500);
        return ()=>clearTimeout(timer);
    }, [
        searchQuery,
        onChangeFunction
    ]);
    const reset = /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Button), {
        type: "reset",
        id: "inputReset",
        onClick: ()=>{
            setSearchQuery("");
        },
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$FontAwesomeIcon), {
                icon: "fa-xmark",
                size: "1x",
                "aria-hidden": "true",
                role: "presentation"
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                className: "reset-text",
                children: resetContent
            })
        ]
    });
    const labelClass = srOnly ? "sr-only" : "";
    return /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$FormGroup), {
        className: `dc-search-input ${className}`,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Label), {
                for: "inputSearch",
                className: `${labelClass} ${labelClassName}`,
                children: labelContent
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Input), {
                type: "text",
                name: "inputSearch",
                id: "inputSearch",
                placeholder: placeholder,
                value: searchQuery,
                onChange: (e)=>{
                    setSearchQuery(e.target.value);
                },
                bsSize: bsSize
            }),
            searchQuery.length ? reset : null,
            showSubmit && /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Button), {
                type: "submit",
                id: "inputSubmit",
                children: submitContent
            })
        ]
    });
};
$bdb071ea3a6d3466$var$SearchInput.defaultProps = {
    placeholder: "Search the Data",
    labelContent: "Search",
    value: "",
    bsSize: "lg",
    labelClassName: "",
    srOnly: true,
    className: "",
    resetContent: "Reset",
    submitContent: "Submit",
    showSubmit: true,
    showReset: true
};
$bdb071ea3a6d3466$var$SearchInput.propTypes = {
    placeholder: (0, $hgUW1$proptypes).string,
    value: (0, $hgUW1$proptypes).string,
    bsSize: (0, $hgUW1$proptypes).string,
    labelClassName: (0, $hgUW1$proptypes).string,
    srOnly: (0, $hgUW1$proptypes).bool,
    className: (0, $hgUW1$proptypes).string,
    resetContent: (0, $hgUW1$proptypes).node,
    submitContent: (0, $hgUW1$proptypes).node,
    onChangeFunction: (0, $hgUW1$proptypes).func.isRequired,
    showSubmit: (0, $hgUW1$proptypes).bool,
    showReset: (0, $hgUW1$proptypes).bool,
    labelContent: (0, $hgUW1$proptypes).string
};
var $bdb071ea3a6d3466$export$2e2bcd8739ae039 = $bdb071ea3a6d3466$var$SearchInput;





const $f2b9899ba8e1d155$var$SearchList = ({ children: children, message: message, className: className, listClassName: listClassName, resultsClassName: resultsClassName })=>/*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: className,
        children: [
            message && /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: resultsClassName,
                children: message
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("ol", {
                className: listClassName,
                children: children
            })
        ]
    });
$f2b9899ba8e1d155$var$SearchList.defaultProps = {
    message: "",
    listClassName: "search-list",
    className: "",
    resultsClassName: "results-message"
};
$f2b9899ba8e1d155$var$SearchList.propTypes = {
    children: (0, $hgUW1$proptypes).node.isRequired,
    message: (0, $hgUW1$proptypes).string,
    listClassName: (0, $hgUW1$proptypes).string,
    className: (0, $hgUW1$proptypes).string,
    resultsClassName: (0, $hgUW1$proptypes).string
};
var $f2b9899ba8e1d155$export$2e2bcd8739ae039 = $f2b9899ba8e1d155$var$SearchList;


/* eslint-disable */ 








const $29f9f491b1a950e3$var$SearchListItem = ({ className: className, item: item })=>{
    const { ref: ref, title: title, description: description, publisher: publisher, format: format, theme: theme, identifier: identifier } = item;
    function formats(distribution) {
        if (!distribution) return null;
        if (typeof distribution === "object" || Array.isArray(distribution)) {
            const distributionWithUniqueFormats = $29f9f491b1a950e3$export$b99d5233a2010447(Object.entries(distribution));
            const counted = (0, $hgUW1$countBy)(distribution, (d)=>{
                return d.format;
            });
            return distributionWithUniqueFormats.map((dist)=>{
                const type = dist.mediaType ? dist.mediaType.split("/") : "";
                const backup = type ? type : "data";
                const format = dist.format ? dist.format : backup;
                return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                    title: `format: ${dist.format}`,
                    className: "label",
                    "data-format": format,
                    children: [
                        counted[format],
                        "x ",
                        format
                    ]
                }, `dist-id-${identifier}-${Math.random() * 10}`);
            });
        }
        return null;
    }
    function themes(theme) {
        if (!theme) return null;
        else return theme.map((topic, idx)=>{
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                className: "dc-topic-wrapper",
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)((0, $a4de17e3b28de8f4$export$2e2bcd8739ae039), {
                        title: topic,
                        height: 16,
                        width: 16
                    }),
                    topic
                ]
            }, idx);
        });
    }
    function publishers(publisher) {
        if (!publisher) return null;
        else return /*#__PURE__*/ (0, $hgUW1$jsxs)("span", {
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $431f685c2f6b35cd$export$2e2bcd8739ae039), {
                    icon: "group",
                    height: 20,
                    width: 20
                }),
                publisher
            ]
        });
    }
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
                children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Link), {
                    to: ref,
                    children: title
                })
            }),
            publisher !== "undefined" && /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "dc-item-publisher",
                children: publishers(publisher)
            }),
            theme && /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "dc-item-theme",
                children: themes(theme)
            }),
            description && /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "dc-item-description",
                children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $4ef45fb61f491f4a$export$2e2bcd8739ae039), {
                    children: (0, $hgUW1$excerpts)(description, {
                        words: 35
                    })
                })
            }),
            format && /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "format-types",
                children: formats(format)
            })
        ]
    });
};
const $29f9f491b1a950e3$export$b99d5233a2010447 = (formats)=>{
    let unique = [];
    return formats.reduce((a, b)=>{
        if (unique.indexOf(b[1].format) === -1) {
            unique.push(b[1].format);
            a.push(b[1]);
        }
        return a;
    }, []);
};
$29f9f491b1a950e3$var$SearchListItem.defaultProps = {
    className: "dc-search-list-item"
};
$29f9f491b1a950e3$var$SearchListItem.propTypes = {
    className: (0, $hgUW1$proptypes).string,
    item: (0, $hgUW1$proptypes).objectOf((0, $hgUW1$proptypes).any).isRequired
};
var $29f9f491b1a950e3$export$2e2bcd8739ae039 = $29f9f491b1a950e3$var$SearchListItem;





const $786840379f8f5d81$var$SearchPageSizer = ({ className: className, currentValue: currentValue, inputClasses: inputClasses, label: label, options: options, resizeFunc: resizeFunc, showLabel: showLabel })=>/*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: className,
        children: [
            showLabel && /*#__PURE__*/ (0, $hgUW1$jsx)("label", {
                htmlFor: "search-page-sizer",
                children: label
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("select", {
                id: "search-page-sizer",
                className: inputClasses,
                value: currentValue,
                onChange: resizeFunc,
                children: options.map((opt)=>/*#__PURE__*/ (0, $hgUW1$jsx)("option", {
                        value: opt,
                        children: opt
                    }, opt))
            })
        ]
    });
$786840379f8f5d81$var$SearchPageSizer.defaultProps = {
    className: "search-page-sizer",
    inputClasses: "search-page-sizer-input",
    label: "Page Size",
    options: [
        5,
        10,
        25,
        50
    ],
    showLabel: true
};
$786840379f8f5d81$var$SearchPageSizer.propTypes = {
    className: (0, $hgUW1$proptypes).string,
    currentValue: (0, $hgUW1$proptypes).number.isRequired,
    inputClasses: (0, $hgUW1$proptypes).string,
    label: (0, $hgUW1$proptypes).string,
    options: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).number),
    resizeFunc: (0, $hgUW1$proptypes).func.isRequired,
    showLabel: (0, $hgUW1$proptypes).bool
};
var $786840379f8f5d81$export$2e2bcd8739ae039 = $786840379f8f5d81$var$SearchPageSizer;





const $370865171679b290$var$SearchPaginationResults = ({ className: className, currentPage: currentPage, pageSize: pageSize, total: total })=>{
    const startingNumber = total > 0 ? 1 : 0;
    const currentLowestResult = startingNumber + (pageSize * currentPage - pageSize);
    let currentHighestResult = pageSize * currentPage;
    if (currentHighestResult > total) currentHighestResult = total;
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: className,
        children: [
            currentLowestResult,
            "-",
            currentHighestResult,
            " ",
            "of",
            " ",
            total,
            " ",
            "datasets"
        ]
    });
};
$370865171679b290$var$SearchPaginationResults.defaultProps = {
    className: "dataset-results-count"
};
$370865171679b290$var$SearchPaginationResults.propTypes = {
    className: (0, $hgUW1$proptypes).string,
    currentPage: (0, $hgUW1$proptypes).number.isRequired,
    pageSize: (0, $hgUW1$proptypes).number.isRequired,
    total: (0, $hgUW1$proptypes).number.isRequired
};
var $370865171679b290$export$2e2bcd8739ae039 = $370865171679b290$var$SearchPaginationResults;








const $c5141f7ea646e976$var$SearchResultsMessage2 = ({ className: className, total: total, searchTerm: searchTerm, searchClass: searchClass, facets: facets, facetTitleClass: facetTitleClass, facetListClass: facetListClass, facetDelimiter: facetDelimiter, facetTypeDelimiter: facetTypeDelimiter, facetLimit: facetLimit })=>{
    const totalInfo = getTotalInfo(total);
    const searchInfo = getSearchInfo(searchTerm, searchClass);
    const facetsInfo = getFacetsInfo(facets, facetTitleClass, facetListClass, facetDelimiter, facetTypeDelimiter, facetLimit);
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0, $hgUW1$jsxs)("p", {
            children: [
                totalInfo,
                searchInfo,
                facetsInfo
            ]
        })
    });
    function getTotalInfo(total) {
        let text = [];
        text.push(total.toLocaleString("en"));
        text.push(total !== 1 ? "datasets" : "dataset");
        text.push("found");
        return text.join(" ");
    }
    function getSearchInfo(searchTerm, searchQueryClass) {
        if (!searchTerm) return "";
        return /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Fragment), {
            children: [
                " ",
                'for "',
                /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                    className: searchQueryClass,
                    children: searchTerm
                }),
                '"'
            ]
        });
    }
    function getFacetsInfo(facets, facetTitleClass, facetListClass, facetDelimiter, facetTypeDelimiter, facetLimit) {
        if (facets.length == 0) return "";
        const facetTypes = $c5141f7ea646e976$var$getFacetTypes(facets);
        let facetsText = [];
        let counter = 0;
        facetsText.push(" in ");
        facetTypes.forEach((facetType)=>{
            // Add '&' between facet types.
            if (counter > 0) facetsText.push(facetTypeDelimiter);
            facetsText.push($c5141f7ea646e976$var$getFragmentForFacetType(facetType, facets, facetTitleClass, facetDelimiter, facetLimit));
            counter++;
        });
        return /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
            className: facetListClass,
            children: facetsText
        });
    }
};
function $c5141f7ea646e976$var$getFacetTypes(selectedFacets) {
    return selectedFacets.map((facet)=>facet[0]).filter((value, index, self)=>self.indexOf(value) === index);
}
function $c5141f7ea646e976$var$getFacetsOfType(facetType, selectedFacets) {
    let facets = [];
    selectedFacets.forEach((facet)=>{
        if (facet[0] === facetType) facets.push(facet[1]);
    });
    return facets;
}
function $c5141f7ea646e976$var$getFragmentForFacetType(facetType, selectedFacets, facetTitleClass, facetDelimiter, facetLimit) {
    let facetTitle = /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
        className: facetTitleClass,
        children: facetType
    });
    const facets = $c5141f7ea646e976$var$getFacetsOfType(facetType, selectedFacets);
    const facetsText = $c5141f7ea646e976$var$getFacetsText(facets, facetType, facetDelimiter, facetLimit);
    return /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Fragment1), {
        children: [
            facetTitle,
            ":",
            " ",
            facetsText
        ]
    }, `${facetType}-${facets.length}`);
}
function $c5141f7ea646e976$var$getFacetsText(facets, facetType, facetDelimiter, facetLimit) {
    if (facets.length === facetLimit) return facets.length + " selected " + facetType;
    return facets.join(facetDelimiter);
}
$c5141f7ea646e976$var$SearchResultsMessage2.defaultProps = {
    className: "dc-search-results-message",
    facetTitleClass: "dc-search-results-facet-title",
    facetListClass: "dc-search-results-facet-list",
    searchQueryClass: "dc-search-results-query",
    facetDelimiter: " or ",
    facetTypeDelimiter: " | ",
    facetLimit: 3
};
$c5141f7ea646e976$var$SearchResultsMessage2.propTypes = {
    className: (0, $hgUW1$proptypes).string,
    total: (0, $hgUW1$proptypes).number.isRequired,
    searchTerm: (0, $hgUW1$proptypes).string.isRequired,
    searchClass: (0, $hgUW1$proptypes).string,
    facets: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).array).isRequired,
    facetTitleClass: (0, $hgUW1$proptypes).string,
    facetListClass: (0, $hgUW1$proptypes).string,
    facetDelimiter: (0, $hgUW1$proptypes).string,
    facetTypeDelimiter: (0, $hgUW1$proptypes).string,
    facetLimit: (0, $hgUW1$proptypes).number
};
var $c5141f7ea646e976$export$2e2bcd8739ae039 = $c5141f7ea646e976$var$SearchResultsMessage2;


const $14f8c4536e13367f$var$SearchResultsMessage = ({ searchTerm: searchTerm, selectedFacets: selectedFacets, total: total, showQuery: showQuery, showFacets: showFacets, className: className, facetTitleClass: facetTitleClass, facetListClass: facetListClass, searchQueryClass: searchQueryClass, facetDelimiter: facetDelimiter, facetSeparator: facetSeparator, defaultFacets: defaultFacets })=>{
    let term = "";
    let facets = [];
    if (showFacets) facets = [
        ...selectedFacets
    ];
    if (facets.length > 0 && showFacets) facets = selectedFacets.map((item)=>{
        const newItem = [
            ...item
        ];
        const facetType = item[0];
        if (facetType in defaultFacets) newItem[0] = defaultFacets[facetType].label;
        return newItem;
    });
    if (searchTerm && showQuery) term = searchTerm;
    return /*#__PURE__*/ (0, $hgUW1$jsx)((0, $c5141f7ea646e976$export$2e2bcd8739ae039), {
        total: total,
        searchTerm: term,
        facets: facets,
        className: className,
        facetTitleClass: facetTitleClass,
        facetListClass: facetListClass,
        searchClass: searchQueryClass,
        facetDelimiter: facetDelimiter,
        facetTypeDelimiter: facetSeparator
    });
};
$14f8c4536e13367f$var$SearchResultsMessage.defaultProps = {
    showQuery: true,
    showFacets: true,
    facetLimit: 3,
    className: "dc-search-results-message",
    facetTitleClass: "dc-search-results-facet-title",
    facetListClass: "dc-search-results-facet-list",
    searchQueryClass: "dc-search-results-query",
    facetDelimiter: " or ",
    facetSeparator: " | "
};
$14f8c4536e13367f$var$SearchResultsMessage.propTypes = {
    className: (0, $hgUW1$proptypes).string,
    showQuery: (0, $hgUW1$proptypes).bool,
    showFacets: (0, $hgUW1$proptypes).bool,
    facetLimit: (0, $hgUW1$proptypes).number,
    facetTitleClass: (0, $hgUW1$proptypes).string,
    facetListClass: (0, $hgUW1$proptypes).string,
    searchQueryClass: (0, $hgUW1$proptypes).string,
    selectedFacets: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).array).isRequired,
    total: (0, $hgUW1$proptypes).number.isRequired,
    searchTerm: (0, $hgUW1$proptypes).string.isRequired,
    facetDelimiter: (0, $hgUW1$proptypes).string,
    facetSeparator: (0, $hgUW1$proptypes).string,
    defaultFacets: (0, $hgUW1$proptypes).objectOf((0, $hgUW1$proptypes).object).isRequired
};
var $14f8c4536e13367f$export$2e2bcd8739ae039 = $14f8c4536e13367f$var$SearchResultsMessage;





const $bb3d59ee024cfeb1$var$SearchSort = ({ className: className, currentValue: currentValue, inputClasses: inputClasses, label: label, options: options, sortFunc: sortFunc })=>/*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("label", {
                htmlFor: "search-sort",
                children: label
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("select", {
                id: "search-sort",
                className: inputClasses,
                value: currentValue,
                onChange: sortFunc,
                children: options.map((opt)=>/*#__PURE__*/ (0, $hgUW1$jsx)("option", {
                        value: opt.value,
                        children: opt.label
                    }, opt.value))
            })
        ]
    });
$bb3d59ee024cfeb1$var$SearchSort.defaultProps = {
    className: "search-sort",
    inputClasses: "search-sort-input",
    label: "Sort by",
    options: [
        {
            value: "relevance",
            label: "Relevance"
        },
        {
            value: "date",
            label: "Date"
        },
        {
            value: "alpha",
            label: "Alphabetical"
        }
    ]
};
$bb3d59ee024cfeb1$var$SearchSort.propTypes = {
    className: (0, $hgUW1$proptypes).string,
    currentValue: (0, $hgUW1$proptypes).string.isRequired,
    inputClasses: (0, $hgUW1$proptypes).string,
    label: (0, $hgUW1$proptypes).string,
    options: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).shape({
        value: (0, $hgUW1$proptypes).string,
        label: (0, $hgUW1$proptypes).string
    })),
    sortFunc: (0, $hgUW1$proptypes).func.isRequired
};
var $bb3d59ee024cfeb1$export$2e2bcd8739ae039 = $bb3d59ee024cfeb1$var$SearchSort;



/* eslint-disable */ /* Deprecated: use Text component */ 

function $fe1f0f1e96cf1581$var$String(props) {
    const label = props.label && props.label.length > 0 ? /*#__PURE__*/ (0, $hgUW1$jsxs)("strong", {
        children: [
            props.label,
            ":"
        ]
    }) : "";
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        children: [
            label,
            " ",
            props.value
        ]
    });
}
var $fe1f0f1e96cf1581$export$2e2bcd8739ae039 = $fe1f0f1e96cf1581$var$String;


/* eslint-disable */ 


class $f49920efc58b0add$var$Table extends (0, $hgUW1$Component) {
    render() {
        const { data: data, configuration: configuration, title: title, th1: th1, th2: th2, tableclass: tableclass } = this.props;
        const fields = Object.keys(configuration);
        if (fields.length == 0) return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {});
        const mapped = fields.map((field, index)=>{
            const Component = String;
            const label = "label" in configuration[field] ? configuration[field].label : "";
            const value = data[field];
            return {
                label: label,
                value: value
            };
        });
        const rows = mapped.map((row, index)=>{
            return /*#__PURE__*/ (0, $hgUW1$jsxs)("tr", {
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)("td", {
                        children: row.label
                    }),
                    /*#__PURE__*/ (0, $hgUW1$jsx)("td", {
                        children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $4ef45fb61f491f4a$export$2e2bcd8739ae039), {
                            value: row.value
                        })
                    })
                ]
            }, row.label);
        });
        if (rows.length) return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: tableclass,
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)("h3", {
                    children: title
                }),
                /*#__PURE__*/ (0, $hgUW1$jsxs)("table", {
                    className: "dc-table table table-bordered table-hover table-striped",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("thead", {
                            children: /*#__PURE__*/ (0, $hgUW1$jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, $hgUW1$jsx)("th", {
                                        children: th1
                                    }),
                                    /*#__PURE__*/ (0, $hgUW1$jsx)("th", {
                                        children: th2
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("tbody", {
                            children: rows
                        })
                    ]
                })
            ]
        });
        else return /*#__PURE__*/ (0, $hgUW1$jsx)("span", {});
    }
}
$f49920efc58b0add$var$Table.defaultProps = {
    title: "Additional Information",
    th1: "Field",
    th2: "Value",
    tableclass: "dc-table-wrapper"
};
var $f49920efc58b0add$export$2e2bcd8739ae039 = $f49920efc58b0add$var$Table;





const $8864abb9cf388836$var$Tags = ({ tags: tags, label: label, path: path })=>{
    const heading = label ? /*#__PURE__*/ (0, $hgUW1$jsx)("h3", {
        children: label
    }) : "";
    const tagsList = tags.map((tag)=>{
        const ref = `${path}${encodeURIComponent(tag.data)}`;
        return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
            className: "dc-tag",
            children: /*#__PURE__*/ (0, $hgUW1$jsx)("a", {
                href: ref,
                children: tag.data
            })
        }, tag.identifier);
    }, "<div></div>");
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: "dc-tag-wrapper",
        children: [
            heading,
            " ",
            tagsList
        ]
    });
};
$8864abb9cf388836$var$Tags.defaultProps = {
    label: null
};
$8864abb9cf388836$var$Tags.propTypes = {
    label: (0, $hgUW1$proptypes).string,
    tags: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).object).isRequired,
    path: (0, $hgUW1$proptypes).string.isRequired
};
var $8864abb9cf388836$export$2e2bcd8739ae039 = $8864abb9cf388836$var$Tags;








const $ce283dd5d7a271ff$var$TopicWrapper = ({ component: component, topic: topic })=>{
    const ComponentToRender = component;
    return /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Link), {
        className: "dc-topic-wrapper",
        to: `/search?theme=${topic}`,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)(ComponentToRender, {
                title: topic,
                height: "16",
                width: "16"
            }),
            topic
        ]
    }, `dist-${topic}-${Math.random() * 10}`);
};
$ce283dd5d7a271ff$var$TopicWrapper.propTypes = {
    component: (0, $hgUW1$proptypes).func.isRequired,
    topic: (0, $hgUW1$proptypes).string.isRequired
};
var $ce283dd5d7a271ff$export$2e2bcd8739ae039 = $ce283dd5d7a271ff$var$TopicWrapper;






function $6bd2bf9ecbc4b71c$export$50cc250712a456a5(state, action) {
    const { selectedFacets: selectedFacets } = state;
    const { newFacet: newFacet } = action.data;
    const newSelectedFacets = [
        ...selectedFacets
    ];
    const found = newSelectedFacets.findIndex((e)=>newFacet[0] === e[0] && newFacet[1] === e[1]);
    if (found > -1) newSelectedFacets.splice(found, 1);
    else newSelectedFacets.push(newFacet);
    return {
        ...state,
        selectedFacets: newSelectedFacets,
        page: action.data.page || 1
    };
}
function $6bd2bf9ecbc4b71c$export$2e2bcd8739ae039(state, action) {
    switch(action.type){
        case "UPDATE_SORT":
            return {
                ...state,
                sort: action.data.sort,
                "sort-order": action.data["sort-order"]
            };
        case "UPDATE_SORT_ONLY":
            return {
                ...state,
                sort: action.data.sort
            };
        case "UPDATE_SORT_ORDER":
            return {
                ...state,
                "sort-order": action.data["sort-order"]
            };
        case "UPDATE_FULLTEXT":
            return {
                ...state,
                fulltext: action.data.fulltext,
                page: action.data.page || 1
            };
        case "UPDATE_PAGE_SIZE":
            return {
                ...state,
                "page-size": action.data["page-size"],
                page: action.data.page || 1
            };
        case "UPDATE_CURRENT_PAGE":
            return {
                ...state,
                page: action.data.page
            };
        case "UPDATE_FACETS":
            return $6bd2bf9ecbc4b71c$export$50cc250712a456a5(state, action);
        case "RESET_FULLTEXT":
            return {
                ...state,
                fulltext: ""
            };
        case "RESET_FACETS":
            return {
                ...state,
                selectedFacets: action.data.selectedFacets,
                page: action.data.page || 1
            };
        case "RESET_ALL":
            return {
                ...state,
                fulltext: "",
                selectedFacets: []
            };
        default:
            return "Not a valid action type.";
    }
}



const $29064a18b651263f$export$c35332c64ee5ce66 = /*#__PURE__*/ (0, $hgUW1$createContext)(null);
const $29064a18b651263f$export$20ef99a1e66725cd = {
    items: [],
    facetsResults: {},
    loading: false,
    page: 1,
    "page-size": 10,
    fulltext: "",
    selectedFacets: [],
    sort: "modified",
    "sort-order": "desc",
    totalItems: 0
};













function $5e821c5bd74a1574$var$getSortParams(searchState, sortOptions) {
    const returnedSort = sortOptions.filter((option)=>option.field === searchState.sort || option.label.toLowerCase() === searchState.sort);
    if (!returnedSort.length) returnedSort.push(sortOptions[0]);
    return returnedSort;
}
function $5e821c5bd74a1574$export$f3f1b6f3fba44408(searchState, defaultFacets, sortOptions) {
    let state = {};
    state = Object.assign(state, searchState);
    const facetKeys = Object.keys(defaultFacets);
    const urlOptions = [
        "fulltext",
        "sort",
        "sort-order",
        "page-size",
        "page",
        ...facetKeys
    ];
    // Figure out sort options
    const currentSort = $5e821c5bd74a1574$var$getSortParams(state, sortOptions);
    state.sort = currentSort[0].field;
    // set search params using sort and searchState
    const apiSearchParams = {};
    urlOptions.forEach((param)=>{
        apiSearchParams[param] = state[param];
    });
    // Set selected facets for search
    if (state.selectedFacets.length) facetKeys.map((key)=>{
        const searchFacets = state.selectedFacets.filter((facet)=>facet[0].toLowerCase() === key.toLowerCase());
        const facetText = searchFacets.map((facet)=>facet[1]);
        if (facetText.length) apiSearchParams[key.toLowerCase()] = facetText;
        return false;
    });
    return (0, $hgUW1$querystring).stringify(apiSearchParams, {
        arrayFormat: "comma"
    });
}
function $5e821c5bd74a1574$export$928021b00bb0ffd6(resultItems) {
    let nItems = resultItems;
    if (!Array.isArray(nItems)) nItems = Object.values(nItems);
    return nItems.map((x)=>{
        let item = {};
        item = {
            identifier: x.identifier,
            modified: x.modified,
            description: x.description,
            theme: x.theme,
            format: x.distribution,
            title: x.title,
            ref: `/dataset/${x.identifier}`
        };
        if (Object.prototype.hasOwnProperty.call(x, "publisher") && Object.prototype.hasOwnProperty.call(x.publisher, "name")) item.publisher = x.publisher.name;
        else item.publisher = "";
        return item;
    });
}



const $403198538385de11$var$SearchContent = ({ loading: loading, data: data })=>{
    const { searchState: searchState, dispatch: dispatch, defaultFacets: defaultFacets } = (0, $hgUW1$useContext)((0, $29064a18b651263f$export$c35332c64ee5ce66));
    const { fulltext: fulltext, selectedFacets: selectedFacets } = searchState;
    const facetTypes = Object.keys(defaultFacets);
    const items = data.results ? (0, $5e821c5bd74a1574$export$928021b00bb0ffd6)(data.results) : [];
    const Loading = ()=>/*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$List), {});
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: "dc-results-list col-md-8 col-sm-12",
        children: items && /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $bdb071ea3a6d3466$export$2e2bcd8739ae039), {
                    placeholder: "Type your search term here",
                    showSubmit: false,
                    srOnly: true,
                    value: fulltext,
                    onChangeFunction: dispatch,
                    onResetFunction: ()=>dispatch({
                            type: "RESET_FULLTEXT"
                        }),
                    resetContent: "Clear text"
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $14f8c4536e13367f$export$2e2bcd8739ae039), {
                    searchTerm: fulltext,
                    total: parseInt(data.total, 10),
                    selectedFacets: selectedFacets,
                    facetTypes: facetTypes,
                    defaultFacets: defaultFacets,
                    facetLimit: 100,
                    facetDelimiter: ", ",
                    facetSeparator: " & "
                }),
                loading || !items || !items.length ? /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)(Loading, {})
                }) : /*#__PURE__*/ (0, $hgUW1$jsx)("ol", {
                    children: items.map((item)=>/*#__PURE__*/ (0, $hgUW1$jsx)("li", {
                            children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $29f9f491b1a950e3$export$2e2bcd8739ae039), {
                                item: item
                            })
                        }, item.identifier))
                }),
                /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                    className: "dc-pagination-container",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)((0, $370865171679b290$export$2e2bcd8739ae039), {
                            total: Number(data.total),
                            pageSize: Number(searchState["page-size"]),
                            currentPage: Number(searchState.page)
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)((0, $786840379f8f5d81$export$2e2bcd8739ae039), {
                            currentValue: Number(searchState["page-size"]),
                            resizeFunc: (e)=>dispatch({
                                    type: "UPDATE_PAGE_SIZE",
                                    data: {
                                        "page-size": e.target.value
                                    }
                                })
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$reactjspagination), {
                            hideDisabled: true,
                            activePage: searchState.page,
                            itemsCountPerPage: Number(searchState["page-size"]),
                            totalItemsCount: Number(data.total),
                            pageRangeDisplayed: 5,
                            onChange: (e)=>dispatch({
                                    type: "UPDATE_CURRENT_PAGE",
                                    data: {
                                        page: e
                                    }
                                })
                        })
                    ]
                })
            ]
        })
    });
};
var $403198538385de11$export$2e2bcd8739ae039 = $403198538385de11$var$SearchContent;









const $9a6877839605474f$var$SearchSidebar = ({ sortOptions: sortOptions, facetsResults: facetsResults })=>{
    const { searchState: searchState, dispatch: dispatch, defaultFacets: defaultFacets } = (0, $hgUW1$useContext)((0, $29064a18b651263f$export$c35332c64ee5ce66));
    const { loading: loading, sort: sort } = searchState;
    const [dropdownOpen, setDropdownOpen] = (0, $hgUW1$useState)(false);
    const toggle = ()=>setDropdownOpen((prevState)=>!prevState);
    const label = sortOptions.filter((s)=>{
        return s.field == sort;
    })[0].label;
    const Loading = ()=>/*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$BulletList), {});
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: "dc-search-sidebar col-md-4 col-sm-12",
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                className: "dc-search-sidebar-options",
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Label), {
                        id: "search-list-sort-label",
                        children: "Sort by:"
                    }),
                    /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Dropdown), {
                        name: "dc-search-list-sort",
                        id: "dc-search-list-sort",
                        "aria-labelledby": "search-list-sort-label",
                        toggle: toggle,
                        isOpen: dropdownOpen,
                        children: [
                            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$DropdownToggle), {
                                caret: true,
                                children: /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                                    children: label
                                })
                            }),
                            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$DropdownMenu), {
                                children: sortOptions.map((sortOpt)=>/*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$DropdownItem), {
                                        value: sortOpt.field,
                                        onClick: (e)=>{
                                            dispatch({
                                                type: "UPDATE_SORT",
                                                data: {
                                                    sort: sortOpt.field,
                                                    "sort-order": sortOpt.order
                                                }
                                            });
                                        },
                                        children: sortOpt.label
                                    }, sortOpt.field))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "dc-search-sidebar-options",
                children: loading || !facetsResults || !facetsResults.length ? /*#__PURE__*/ (0, $hgUW1$jsx)(Loading, {}) : /*#__PURE__*/ (0, $hgUW1$jsx)((0, $5c399e82a5ecd2ed$export$2e2bcd8739ae039), {
                    facetsConfig: defaultFacets,
                    facetsResults: facetsResults,
                    selectedFacets: searchState.selectedFacets,
                    dispatch: dispatch
                })
            })
        ]
    });
};
$9a6877839605474f$var$SearchSidebar.defaultProps = {
    sortOptions: [
        {
            field: "modified",
            order: "desc",
            label: "Date"
        },
        {
            field: "title",
            order: "asc",
            label: "Alphabetical"
        }
    ]
};
$9a6877839605474f$var$SearchSidebar.propTypes = {
    sortOptions: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).object)
};
var $9a6877839605474f$export$2e2bcd8739ae039 = $9a6877839605474f$var$SearchSidebar;



const $3d3583cec563a85a$var$getSearchData = (apiParams, searchEndpoint)=>{
    const { isPending: isPending, error: error, data: data } = (0, $hgUW1$useQuery)({
        queryKey: [
            "searchData",
            apiParams
        ],
        queryFn: ()=>{
            return fetch(`${searchEndpoint}?${apiParams}&facets=0`).then((res)=>res.json());
        }
    });
    return {
        loading: isPending,
        data: data
    };
};
const $3d3583cec563a85a$var$Search = ({ initialSearchState: initialSearchState, searchEndpoint: searchEndpoint, defaultFacets: defaultFacets, sortOptions: sortOptions, setSearchUrl: setSearchUrl, path: path })=>{
    const defaultState = {
        ...(0, $29064a18b651263f$export$20ef99a1e66725cd),
        ...initialSearchState
    };
    const [searchState, dispatch] = (0, $hgUW1$useReducer)((0, $6bd2bf9ecbc4b71c$export$2e2bcd8739ae039), defaultState);
    // On Mount: Synchronize url params with search state.
    (0, $hgUW1$useEffect)(()=>{
        // Set the state from query parameters.
        const params = (0, $hgUW1$querystring).parse(window.location.search);
        let dispatched = false;
        const actions = {};
        actions["page-size"] = "UPDATE_PAGE_SIZE";
        actions.page = "UPDATE_CURRENT_PAGE";
        actions.fulltext = "UPDATE_FULLTEXT";
        actions.sort = "UPDATE_SORT_ONLY";
        actions["sort-order"] = "UPDATE_SORT_ORDER";
        const urlOptions = Object.keys(actions);
        urlOptions.forEach((param)=>{
            if (params[param]) {
                const data = params;
                dispatched = true;
                dispatch({
                    type: actions[param],
                    data: data
                });
            }
        });
        const facetKeys = Object.keys(defaultFacets);
        facetKeys.forEach((key)=>{
            if (params[key]) params[key].split(",").forEach((facetName)=>{
                const newFacet = [
                    key,
                    facetName
                ];
                dispatched = true;
                dispatch({
                    type: "UPDATE_FACETS",
                    data: {
                        newFacet: newFacet,
                        page: params.page
                    }
                });
            });
        });
    }, []);
    // Update URL.
    (0, $hgUW1$useEffect)(()=>{
        const searchParams = {};
        const facetKeys = Object.keys(defaultFacets);
        const state = {
            ...searchState
        };
        // Set other url parameters
        const urlOptions = [
            "fulltext",
            "sort",
            "sort-order",
            "page-size",
            "page"
        ];
        urlOptions.forEach((option)=>{
            // We only want to store state in the url if they are not the default state.
            if (state[option] && state[option] !== defaultState[option]) searchParams[option] = state[option];
        });
        // Set selected facets for search
        if (state.selectedFacets.length) facetKeys.forEach((key)=>{
            const searchFacets = state.selectedFacets.filter((facet)=>facet[0].toLowerCase() === key.toLowerCase());
            searchFacets.forEach((facet)=>{
                if (!(key in searchParams)) searchParams[key] = [];
                searchParams[key].push(facet[1]);
            });
        });
        const params = (0, $hgUW1$querystring).stringify(searchParams, {
            arrayFormat: "comma"
        });
        if (setSearchUrl) {
            const loc = window.location;
            let searchUrl = "";
            searchUrl = Object.keys(params).length ? `${path}?${params}` : `${path}`;
            const currentUrl = `${loc.pathname}${loc.search}`;
            if (window !== undefined && searchUrl !== currentUrl) window.history.pushState({}, "Search", `${searchUrl}`);
        }
    }, [
        searchState.sort,
        searchState["sort-order"],
        searchState.fulltext,
        searchState["page-size"],
        searchState.page,
        searchState.selectedFacets
    ]);
    const apiParams = (0, $5e821c5bd74a1574$export$f3f1b6f3fba44408)(searchState, defaultFacets, sortOptions);
    const { loading: loading, data: data } = $3d3583cec563a85a$var$getSearchData(apiParams, searchEndpoint);
    // facets
    let facets = [];
    Object.keys(defaultFacets).forEach((facet)=>{
        const facetResponse = (0, $hgUW1$useQuery)({
            queryKey: [
                "getFacets",
                facet + apiParams
            ],
            queryFn: ()=>{
                return fetch(`${searchEndpoint}?${apiParams}&facets=${facet}`).then((res)=>res.json());
            }
        }).data;
        if (facetResponse && facetResponse.facets) facetResponse.facets.map((facet)=>{
            facets.push(facet);
        });
    });
    return /*#__PURE__*/ (0, $hgUW1$jsx)((0, $29064a18b651263f$export$c35332c64ee5ce66).Provider, {
        value: {
            searchState: searchState,
            dispatch: dispatch,
            defaultFacets: defaultFacets
        },
        children: data && /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $403198538385de11$export$2e2bcd8739ae039), {
                    loading: loading,
                    data: data
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $9a6877839605474f$export$2e2bcd8739ae039), {
                    facetsResults: facets,
                    sortOptions: sortOptions
                })
            ]
        })
    });
};
$3d3583cec563a85a$var$Search.defaultProps = {
    setSearchUrl: true,
    normalize: null,
    initialSearchState: {}
};
$3d3583cec563a85a$var$Search.propTypes = {
    initialSearchState: (0, $hgUW1$proptypes).objectOf((0, $hgUW1$proptypes).object),
    searchEndpoint: (0, $hgUW1$proptypes).string.isRequired,
    defaultFacets: (0, $hgUW1$proptypes).objectOf((0, $hgUW1$proptypes).object).isRequired,
    sortOptions: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).object).isRequired,
    setSearchUrl: (0, $hgUW1$proptypes).bool,
    path: (0, $hgUW1$proptypes).string.isRequired
};
var $3d3583cec563a85a$export$2e2bcd8739ae039 = $3d3583cec563a85a$var$Search;












const $5958af00fd3b3d5e$var$Announcement = ({ heading: heading, children: children, role: role, variation: variation })=>{
    let iconCode;
    switch(variation){
        case "success":
            iconCode = "check-circle";
            break;
        case "warn":
            iconCode = "exclamation-circle";
            break;
        case "error":
            iconCode = "circle-xmark";
            break;
        case "info":
            iconCode = "info-circle";
            break;
        default:
            iconCode = "info-circle";
    }
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: `dc-alert dc-alert--${variation}`,
        role: role,
        children: [
            heading && /*#__PURE__*/ (0, $hgUW1$jsxs)("h3", {
                children: [
                    /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$FontAwesomeIcon), {
                        icon: (0, $hgUW1$icon)({
                            name: iconCode
                        }),
                        size: "1x",
                        "aria-hidden": "true",
                        role: "presentation"
                    }),
                    heading
                ]
            }),
            children
        ]
    });
};
$5958af00fd3b3d5e$var$Announcement.defaultProps = {
    heading: "Announcement",
    role: "alert",
    variation: null
};
$5958af00fd3b3d5e$var$Announcement.propTypes = {
    heading: (0, $hgUW1$proptypes).string,
    children: (0, $hgUW1$proptypes).node.isRequired,
    role: (0, $hgUW1$proptypes).oneOf([
        "alert",
        "alertdialog"
    ]),
    variation: (0, $hgUW1$proptypes).oneOf([
        "error",
        "warn",
        "success",
        "info"
    ])
};
var $5958af00fd3b3d5e$export$2e2bcd8739ae039 = $5958af00fd3b3d5e$var$Announcement;










class $d048ee469f1b5f07$var$BasicBlock extends (0, $hgUW1$react).PureComponent {
    render() {
        const { content: content } = this.props;
        const img = content.image ? /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
            children: /*#__PURE__*/ (0, $hgUW1$jsx)("img", {
                alt: "",
                src: content.image
            })
        }) : null;
        let block = "";
        if (content.ref) block = /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: "basic-block",
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
                    children: /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $hgUW1$Link), {
                        to: content.ref,
                        children: [
                            img,
                            content.title
                        ]
                    })
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $4ef45fb61f491f4a$export$2e2bcd8739ae039), {
                    value: content.teaser
                })
            ]
        }, content.ref);
        else block = /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: "basic-block",
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsxs)("h2", {
                    children: [
                        img,
                        content.title
                    ]
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)((0, $4ef45fb61f491f4a$export$2e2bcd8739ae039), {
                    value: content.teaser
                })
            ]
        }, content.title);
        return /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Fragment), {
            children: block
        });
    }
}
$d048ee469f1b5f07$var$BasicBlock.defaultProps = {
    content: [
        {
            title: "",
            content: "",
            image: "",
            teaser: "",
            ref: ""
        }
    ]
};
$d048ee469f1b5f07$var$BasicBlock.propTypes = {
    content: (0, $hgUW1$proptypes).shape({
        title: (0, $hgUW1$proptypes).string,
        teaser: (0, $hgUW1$proptypes).string,
        image: (0, $hgUW1$proptypes).string,
        ref: (0, $hgUW1$proptypes).string
    })
};
var $d048ee469f1b5f07$export$2e2bcd8739ae039 = $d048ee469f1b5f07$var$BasicBlock;


function $992311d3b9472d67$var$Blocks({ items: items, component: component, paneTitle: paneTitle, containerClass: containerClass, blockClass: blockClass }) {
    const Block = component || (0, $d048ee469f1b5f07$export$2e2bcd8739ae039);
    if (paneTitle && items) return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: `${containerClass} ${blockClass}`,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
                children: paneTitle
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: "dc-block-content",
                children: items.map((item)=>{
                    return /*#__PURE__*/ (0, $hgUW1$jsx)(Block, {
                        content: item
                    }, item.id);
                })
            })
        ]
    });
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: `${containerClass} ${blockClass}`,
        children: /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
            className: "dc-block-content",
            children: items && items.map((item)=>/*#__PURE__*/ (0, $hgUW1$jsx)(Block, {
                    content: item
                }, item.id))
        })
    });
}
$992311d3b9472d67$var$Blocks.defaultProps = {
    component: "BasicBlock",
    containerClass: "container",
    blockClass: "BasicBlock",
    paneTitle: ""
};
$992311d3b9472d67$var$Blocks.propTypes = {
    items: (0, $hgUW1$proptypes).array.isRequired,
    component: (0, $hgUW1$proptypes).func,
    containerClass: (0, $hgUW1$proptypes).string,
    blockClass: (0, $hgUW1$proptypes).string,
    paneTitle: (0, $hgUW1$proptypes).string
};
var $992311d3b9472d67$export$2e2bcd8739ae039 = $992311d3b9472d67$var$Blocks;









const $f2e7a65d31690d3d$var$Header = ({ link: link, logo: logo, site: site, slogan: slogan, customClasses: customClasses, navItems: navItems })=>/*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        className: "dc-header",
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                className: customClasses,
                children: /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                    className: "branding",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Link), {
                            to: link,
                            className: "dc-logo",
                            children: /*#__PURE__*/ (0, $hgUW1$jsx)("img", {
                                src: logo,
                                alt: "Open Data Catalog"
                            })
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                            className: "dc-site-name",
                            children: [
                                site && /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Link), {
                                    to: link,
                                    children: site
                                }),
                                slogan && /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                                    className: "dc-slogan",
                                    children: slogan
                                })
                            ]
                        })
                    ]
                })
            }),
            navItems && /*#__PURE__*/ (0, $hgUW1$jsx)((0, $2aa67f963fc9e19e$export$2e2bcd8739ae039), {
                navItems: navItems,
                className: customClasses
            })
        ]
    });
$f2e7a65d31690d3d$var$Header.defaultProps = {
    customClasses: null,
    link: "/",
    logo: "https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg",
    site: "",
    slogan: ""
};
$f2e7a65d31690d3d$var$Header.propTypes = {
    customClasses: (0, $hgUW1$proptypes).string,
    link: (0, $hgUW1$proptypes).string,
    logo: (0, $hgUW1$proptypes).string,
    site: (0, $hgUW1$proptypes).string,
    slogan: (0, $hgUW1$proptypes).string,
    navItems: (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).shape({
        label: (0, $hgUW1$proptypes).string,
        url: (0, $hgUW1$proptypes).string
    }))
};
var $f2e7a65d31690d3d$export$2e2bcd8739ae039 = $f2e7a65d31690d3d$var$Header;







const $b55a49a2764a6cfd$var$Hero = ({ alignment: alignment, title: title, intro: intro, image: image, resetContent: resetContent, includeReset: includeReset, submitContent: submitContent, gradient: gradient })=>{
    const [query, setQuery] = (0, $hgUW1$useState)("");
    const background = image ? `url(${image})` : `linear-gradient(${gradient})`;
    async function handleSubmit(event) {
        event.preventDefault();
        let searchParams = "/search/";
        if (query) searchParams = `/search/?fulltext=${query}`;
        (0, $hgUW1$useNavigate)(searchParams);
    }
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: "dc-hero",
        style: {
            backgroundImage: background
        },
        children: /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: `dc-hero-block ${alignment}`,
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
                    className: "dc-hero-title",
                    children: title
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)("p", {
                    children: intro
                }),
                /*#__PURE__*/ (0, $hgUW1$jsxs)("form", {
                    onSubmit: (event)=>handleSubmit(event),
                    className: "dc-hero-search",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Label), {
                            className: "sr-only",
                            htmlFor: "hero_search",
                            children: "Search"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Input), {
                            value: query,
                            onChange: (event)=>setQuery(event.target.value),
                            id: "hero_search"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Button), {
                            type: "submit",
                            children: submitContent
                        }),
                        includeReset && query && /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Button), {
                            className: "dc-hero-reset",
                            type: "reset",
                            onClick: ()=>setQuery(""),
                            children: resetContent
                        })
                    ]
                })
            ]
        })
    });
};
$b55a49a2764a6cfd$var$Hero.defaultProps = {
    alignment: "center",
    title: "Welcome to Heritage Graph",
    intro: "Nepal's rich cultural heritage faces threats. This project tackles this by creating a digital knowledge graph of Nepali cultural heritage, ensuring accessibility, preservation, and deeper understanding for all.",
    image: "",
    includeReset: true,
    resetContent: "Clear",
    submitContent: "Go",
    gradient: "#cccccc,#eeeeee"
};
$b55a49a2764a6cfd$var$Hero.propTypes = {
    title: (0, $hgUW1$proptypes).string,
    intro: (0, $hgUW1$proptypes).string,
    alignment: (0, $hgUW1$proptypes).string,
    image: (0, $hgUW1$proptypes).string,
    resetContent: (0, $hgUW1$proptypes).node,
    includeReset: (0, $hgUW1$proptypes).bool,
    submitContent: (0, $hgUW1$proptypes).node,
    gradient: (0, $hgUW1$proptypes).string
};
var $b55a49a2764a6cfd$export$2e2bcd8739ae039 = $b55a49a2764a6cfd$var$Hero;









(0, $hgUW1$library).add((0, $hgUW1$fab));
function $a6df0aa147323304$var$Footer({ links: links, customClasses: customClasses }) {
    const menu1 = links ? /*#__PURE__*/ (0, $hgUW1$jsx)((0, $1c2c1cd9518fa619$export$2e2bcd8739ae039), {
        items: links.footer1,
        menuId: "leftnav"
    }) : null;
    const menu2 = links ? /*#__PURE__*/ (0, $hgUW1$jsx)((0, $1c2c1cd9518fa619$export$2e2bcd8739ae039), {
        items: links.footer2,
        menuId: "rightnav"
    }) : null;
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: "dc-footer",
        children: /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: `${customClasses} page-footer`,
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
                    className: "branding",
                    children: [
                        /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
                            children: "Heritage Graph"
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsx)("p", {
                            children: "To shape our future, we must understand our past. Digitizing cultural heritage ensures its preservation for generations to come."
                        }),
                        /*#__PURE__*/ (0, $hgUW1$jsxs)("p", {
                            children: [
                                "Maintained by ",
                                /*#__PURE__*/ (0, $hgUW1$jsx)("a", {
                                    href: "https://github.com/CAIRNepal/CHLOD",
                                    children: "CAIR-Nepal"
                                }),
                                /*#__PURE__*/ (0, $hgUW1$jsxs)("a", {
                                    href: "https://github.com/CAIRNepal/CHLOD",
                                    className: "social",
                                    children: [
                                        /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$FontAwesomeIcon), {
                                            icon: [
                                                "fab",
                                                "github"
                                            ],
                                            size: "1x",
                                            "aria-hidden": "true",
                                            role: "presentation"
                                        }),
                                        /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                                            className: "sr-only",
                                            children: "Github"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                menu1,
                menu2
            ]
        })
    });
}
$a6df0aa147323304$var$Footer.defaultProps = {
    customClasses: "",
    links: null
};
const $a6df0aa147323304$var$footerPropType = (0, $hgUW1$proptypes).arrayOf((0, $hgUW1$proptypes).shape({
    label: (0, $hgUW1$proptypes).string,
    url: (0, $hgUW1$proptypes).string,
    target: (0, $hgUW1$proptypes).string
}));
$a6df0aa147323304$var$Footer.propTypes = {
    customClasses: (0, $hgUW1$proptypes).string,
    links: (0, $hgUW1$proptypes).shape({
        main: $a6df0aa147323304$var$footerPropType,
        footer1: $a6df0aa147323304$var$footerPropType,
        footer2: $a6df0aa147323304$var$footerPropType
    })
};
var $a6df0aa147323304$export$2e2bcd8739ae039 = $a6df0aa147323304$var$Footer;






class $0a6ab4d3217b3bf4$var$StatBlock extends (0, $hgUW1$react).PureComponent {
    render() {
        const { content: content } = this.props;
        return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: "stat-block",
            children: [
                content.icon && /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$FontAwesomeIcon), {
                    icon: content.icon,
                    size: "4x",
                    "aria-hidden": "true",
                    role: "presentation"
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)("h2", {
                    children: content.title
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)("p", {
                    children: content.content
                })
            ]
        }, content.ref);
    }
}
$0a6ab4d3217b3bf4$var$StatBlock.defaultProps = {
    icon: "",
    title: "",
    content: ""
};
$0a6ab4d3217b3bf4$var$StatBlock.propTypes = {
    icon: (0, $hgUW1$proptypes).string,
    title: (0, $hgUW1$proptypes).string,
    content: (0, $hgUW1$proptypes).string
};
var $0a6ab4d3217b3bf4$export$2e2bcd8739ae039 = $0a6ab4d3217b3bf4$var$StatBlock;





class $12c5dd7a734ee8c2$var$StepsBlock extends (0, $hgUW1$react).PureComponent {
    render() {
        const { content: content } = this.props;
        return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
            className: "steps-block",
            children: [
                /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                    className: "steps-step",
                    children: content.step
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)("h3", {
                    children: content.title
                }),
                /*#__PURE__*/ (0, $hgUW1$jsx)("p", {
                    children: content.content
                })
            ]
        }, content.ref);
    }
}
$12c5dd7a734ee8c2$var$StepsBlock.defaultProps = {
    step: "",
    title: "",
    content: ""
};
$12c5dd7a734ee8c2$var$StepsBlock.propTypes = {
    step: (0, $hgUW1$proptypes).string,
    title: (0, $hgUW1$proptypes).string,
    content: (0, $hgUW1$proptypes).string
};
var $12c5dd7a734ee8c2$export$2e2bcd8739ae039 = $12c5dd7a734ee8c2$var$StepsBlock;










export {$c39b21100f9555ed$export$2e2bcd8739ae039 as ApiDocs, $431f685c2f6b35cd$export$2e2bcd8739ae039 as DataIcon, $af3fcd719f41850c$export$2e2bcd8739ae039 as DataTableDensity, $10d756273efdc2df$export$2e2bcd8739ae039 as DataTablePageResults, $f88ff4b566e98b40$export$2e2bcd8739ae039 as DataTablePageSizer, $2070e1a380541855$export$2e2bcd8739ae039 as IconList, $d7569e22dd161fbc$export$2e2bcd8739ae039 as IconListItem, $110e95b095a6296a$export$2e2bcd8739ae039 as FileDownload, $7e413a60cdf9bca9$export$2e2bcd8739ae039 as FormatIcon, $ef13b8053d863360$export$2e2bcd8739ae039 as ManageColumns, $1c2c1cd9518fa619$export$2e2bcd8739ae039 as Menu, $b3cdb56addbaed9b$export$2e2bcd8739ae039 as Modal, $2aa67f963fc9e19e$export$2e2bcd8739ae039 as NavBar, $7c9d8ba2cb4237d4$export$2e2bcd8739ae039 as Organization, $29583c79cf157ed1$export$2e2bcd8739ae039 as PageHeader, $824049430e5a4d5d$export$2e2bcd8739ae039 as PublisherList, $0284d3cdff4d76f1$export$2e2bcd8739ae039 as Resource, $5c399e82a5ecd2ed$export$2e2bcd8739ae039 as SearchFacets, $5726fc67340cb5d4$export$2e2bcd8739ae039 as SearchFacet, $bdb071ea3a6d3466$export$2e2bcd8739ae039 as SearchInput, $f2b9899ba8e1d155$export$2e2bcd8739ae039 as SearchList, $29f9f491b1a950e3$export$2e2bcd8739ae039 as SearchListItem, $786840379f8f5d81$export$2e2bcd8739ae039 as SearchPageSizer, $370865171679b290$export$2e2bcd8739ae039 as SearchPaginationResults, $14f8c4536e13367f$export$2e2bcd8739ae039 as SearchResultsMessage, $bb3d59ee024cfeb1$export$2e2bcd8739ae039 as SearchSort, $3b217581c5ae5543$export$2e2bcd8739ae039 as ShowMoreContainer, $fe1f0f1e96cf1581$export$2e2bcd8739ae039 as String, $f49920efc58b0add$export$2e2bcd8739ae039 as Table, $8864abb9cf388836$export$2e2bcd8739ae039 as Tags, $4ef45fb61f491f4a$export$2e2bcd8739ae039 as Text, $e64599ce267cd2f7$export$2e2bcd8739ae039 as ToggleBlock, $ce283dd5d7a271ff$export$2e2bcd8739ae039 as TopicWrapper, $3d3583cec563a85a$export$2e2bcd8739ae039 as Search, $29064a18b651263f$export$c35332c64ee5ce66 as SearchDispatch, $29064a18b651263f$export$20ef99a1e66725cd as defaultSearchState, $33221421d2520c36$export$b63dc320f5671cb as defaultResourceState, $6bd2bf9ecbc4b71c$export$2e2bcd8739ae039 as searchReducer, $54f7ba894c2d6b35$export$e858af1f2c67c762 as resetSelectedFacets, $54f7ba894c2d6b35$export$ac0ce5717826b59c as buildInitialFacets, $54f7ba894c2d6b35$export$2f1909273c0eb60f as updateSort, $d66b16e18f8b1cbb$export$1147582dfae658c6 as prepareColumns, $5958af00fd3b3d5e$export$2e2bcd8739ae039 as Announcement, $992311d3b9472d67$export$2e2bcd8739ae039 as Blocks, $d048ee469f1b5f07$export$2e2bcd8739ae039 as BasicBlock, $f90b41de1e4926f3$export$2e2bcd8739ae039 as DataTable, $f2e7a65d31690d3d$export$2e2bcd8739ae039 as Header, $b55a49a2764a6cfd$export$2e2bcd8739ae039 as Hero, $a6df0aa147323304$export$2e2bcd8739ae039 as Footer, $0a6ab4d3217b3bf4$export$2e2bcd8739ae039 as StatBlock, $12c5dd7a734ee8c2$export$2e2bcd8739ae039 as StepsBlock, $9a6877839605474f$export$2e2bcd8739ae039 as SearchSidebar, $403198538385de11$export$2e2bcd8739ae039 as SearchContent, $a4de17e3b28de8f4$export$2e2bcd8739ae039 as TopicIcon, $80704d31b757107d$export$2e2bcd8739ae039 as DataTableHeader};
//# sourceMappingURL=index.js.map
