/*!
 * jQuery Mobile 1.4.5
 * Git HEAD hash: 68e55e78b292634d3991c795f06f5e37a512decc <> Date: Fri Oct 31 2014 17:33:30 UTC
 * http://jquerymobile.com
 *
 * Copyright 2010, 2014 jQuery Foundation, Inc. and othercontributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */


/* Globals */


/* Font
-----------------------------------------------------------------------------------------------------------*/

html {
    font - size: 100 % ;
}

body,
input,
select,
textarea,
button,
.ui - btn {
    font - size: 1e m;
    line - height: 1.3;
    font - family: Helvetica,
        Arial,
        sans - serif /*{global-font-family}*/ ;
}

legend,
.ui - input - text input,
    .ui - input - search input {
        color: inherit;
        text - shadow: inherit;
    }


/* Form labels (overrides font-weight bold in bars, and mini font-size) */

.ui - mobile label,
    div.ui - controlgroup - label {
        font - weight: normal;
        font - size: 16 px;
    }


/* Separators
-----------------------------------------------------------------------------------------------------------*/


/* Field contain separator (< 28em) */

.ui - field - contain {
    border - bottom - color: #828282;
    border-bottom-color: rgba(0, 0, 0, .15);
    border-bottom-width: 1px;
    border-bottom-style: solid;
}


/* Table opt-in classes: strokes between each row, and alternating row stripes */


/* Classes table-stroke and table-stripe are deprecated in 1.4. */

.table-stroke thead th,
.table-stripe thead th,
.table-stripe tbody tr:last-child {
    border-bottom: 1px solid # d6d6d6;
    /* non-RGBA fallback */
    border - bottom: 1 px solid rgba(0, 0, 0, .1);
}

.table - stroke tbody th,
    .table - stroke tbody td {
        border - bottom: 1 px solid# e6e6e6;
        /* non-RGBA fallback  */
        border - bottom: 1 px solid rgba(0, 0, 0, .05);
    }

.table - stripe.table - stroke tbody tr: last - child th,
    .table - stripe.table - stroke tbody tr: last - child td {
        border - bottom: 0;
    }

.table - stripe tbody tr: nth - child(odd) td,
    .table - stripe tbody tr: nth - child(odd) th {
        background - color: #eeeeee;
        /* non-RGBA fallback  */
        background - color: rgba(0, 0, 0, .04);
    }


/* Buttons
-----------------------------------------------------------------------------------------------------------*/

.ui - btn,
    label.ui - btn {
        font - weight: bold;
        border - width: 1 px;
        border - style: solid;
    }

.ui - btn {
    text - decoration: none!important;
}

.ui - btn - active {
    cursor: pointer;
}


/* Corner rounding
-----------------------------------------------------------------------------------------------------------*/


/* Class ui-btn-corner-all deprecated in 1.4 */

.ui - corner - all {
    -webkit - border - radius: .6e m /*{global-radii-blocks}*/ ;
    border - radius: .6e m /*{global-radii-blocks}*/ ;
}


/* Buttons */

.ui - btn - corner - all,
    .ui - btn.ui - corner - all,

    /* Slider track */

    .ui - slider - track.ui - corner - all,

    /* Flipswitch */

    .ui - flipswitch.ui - corner - all,

    /* Count bubble */

    .ui - li - count {
        -webkit - border - radius: 1e m /*{global-radii-buttons}*/ ;
        border - radius: 1e m /*{global-radii-buttons}*/ ;
    }


/* Icon-only buttons */

.ui - btn - icon - notext.ui - btn - corner - all,
    .ui - btn - icon - notext.ui - corner - all {
        -webkit - border - radius: 1e m;
        border - radius: 1e m;
    }


/* Radius clip workaround for cleaning up corner trapping */

.ui - btn - corner - all,
    .ui - corner - all {
        -webkit - background - clip: padding;
        background - clip: padding - box;
    }


/* Popup arrow */

.ui - popup.ui - corner - all > .ui - popup - arrow - guide {
    left: .6e m /*{global-radii-blocks}*/ ;
    right: .6e m /*{global-radii-blocks}*/ ;
    top: .6e m /*{global-radii-blocks}*/ ;
    bottom: .6e m /*{global-radii-blocks}*/ ;
}


/* Shadow
-----------------------------------------------------------------------------------------------------------*/

.ui - shadow {
    -webkit - box - shadow: 0 1 px 4 px /*{global-box-shadow-size}*/
    rgba(0, 0, 0, .3) /*{global-box-shadow-color}*/ ; -
    moz - box - shadow: 0 1 px 4 px /*{global-box-shadow-size}*/
    rgba(0, 0, 0, .3) /*{global-box-shadow-color}*/ ;
    box - shadow: 0 1 px 4 px /*{global-box-shadow-size}*/
    rgba(0, 0, 0, .3) /*{global-box-shadow-color}*/ ;
}

.ui - shadow - inset {
    -webkit - box - shadow: inset 0 1 px 4 px /*{global-box-shadow-size}*/
    rgba(0, 0, 0, .3) /*{global-box-shadow-color}*/ ; -
    moz - box - shadow: inset 0 1 px 4 px /*{global-box-shadow-size}*/
    rgba(0, 0, 0, .3) /*{global-box-shadow-color}*/ ;
    box - shadow: inset 0 1 px 4 px /*{global-box-shadow-size}*/
    rgba(0, 0, 0, .3) /*{global-box-shadow-color}*/ ;
}

.ui - overlay - shadow {
    -webkit - box - shadow: 0 0 12 px rgba(0, 0, 0, .6); -
    moz - box - shadow: 0 0 12 px rgba(0, 0, 0, .6);
    box - shadow: 0 0 12 px rgba(0, 0, 0, .6);
}


/* Icons
-----------------------------------------------------------------------------------------------------------*/

.ui - btn - icon - left: after,
    .ui - btn - icon - right: after,
    .ui - btn - icon - top: after,
    .ui - btn - icon - bottom: after,
    .ui - btn - icon - notext: after {
        background - color: #666666/*{global-icon-color}*/
    ;
    background-color: rgba(0, 0, 0, .4)/*{global-icon-disc}*/
    ;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-border-radius: 1em;
    border-radius: 1em;
}


/* Alt icons */

.ui-alt-icon.ui-btn:after,
.ui-alt-icon .ui-btn:after,
html .ui-alt-icon.ui-checkbox-off:after,
html .ui-alt-icon.ui-radio-off:after,
html .ui-alt-icon .ui-checkbox-off:after,
html .ui-alt-icon .ui-radio-off:after {
    background-color: # 666666 /*{global-icon-color}*/ ;
        background - color: rgba(0, 0, 0, .4) /*{global-icon-disc}*/ ;
    }


/* No disc */

.ui - nodisc - icon.ui - btn: after,
    .ui - nodisc - icon.ui - btn: after {
        background - color: transparent;
    }


/* Icon shadow */

.ui - shadow - icon.ui - btn: after,
    .ui - shadow - icon.ui - btn: after {
        -webkit - box - shadow: 0 1 px 0 rgba(255, 255, 255, .4) /*{global-icon-shadow}*/ ; -
        moz - box - shadow: 0 1 px 0 rgba(255, 255, 255, .4) /*{global-icon-shadow}*/ ;
        box - shadow: 0 1 px 0 rgba(255, 255, 255, .4) /*{global-icon-shadow}*/ ;
    }


/* Checkbox and radio */

.ui - btn.ui - checkbox - off: after,
    .ui - btn.ui - checkbox - on: after,
    .ui - btn.ui - radio - off: after,
    .ui - btn.ui - radio - on: after {
        display: block;
        width: 18 px;
        height: 18 px;
        margin: -9 px 2 px 0 2 px;
    }

.ui - checkbox - off: after,
    .ui - btn.ui - radio - off: after {
        filter: Alpha(Opacity = 30);
        opacity: .3;
    }

.ui - btn.ui - checkbox - off: after,
    .ui - btn.ui - checkbox - on: after {
        -webkit - border - radius: .1875e m;
        border - radius: .1875e m;
    }

.ui - btn.ui - checkbox - off: after {
    background - color: #666;
    background-color: rgba(0, 0, 0, .3);
}

.ui-radio .ui-btn.ui-radio-on:after {
    background-image: none;
    background-color: # fff;
    width: 8 px;
    height: 8 px;
    border - width: 5 px;
    border - style: solid;
}

.ui - alt - icon.ui - btn.ui - radio - on: after,
    .ui - alt - icon.ui - btn.ui - radio - on: after {
        background - color: #000;
}


/* Loader */

.ui-icon-loading {
    background: url("images/ajax-loader.gif");
    background-size: 2.875em 2.875em;
}

.ui-bar-a,
.ui-page-theme-a .ui-bar-inherit,
html .ui-bar-a .ui-bar-inherit,
html .ui-body-a .ui-bar-inherit,
html body .ui-group-theme-a .ui-bar-inherit {
    background-color: # eeeeee;
        border - color: #919191;
    color: # c7c7bb;
        text - shadow: 0 1 px 1 px# ffffff;
        font - weight: bold;
    }

.ui - bar - a {
    border - width: 1 px;
    border - style: solid;
}

.ui - overlay - a,
    .ui - page - theme - a,
    .ui - page - theme - a.ui - panel - wrapper {
        background - color: #e3e4e0;
        border - color: #919191;
    color: # af9f8c;
        text - shadow: 0 1 px 0# ffffff;
    }

.ui - body - a,
    .ui - page - theme - a.ui - body - inherit,
    html.ui - bar - a.ui - body - inherit,
    html.ui - body - a.ui - body - inherit,
    html body.ui - group - theme - a.ui - body - inherit,
    html.ui - panel - page - container - a {
        background - color: #f9f9f9;
        border - color: #aaaaaa;
        color: #333333;
    text-shadow: 0 1px 0 # ffffff;
    }

.ui - body - a {
    border - width: 1 px;
    border - style: solid;
}

.ui - page - theme - a a,
    html.ui - bar - a a,
    html.ui - body - a a,
    html body.ui - group - theme - a a {
        color: #af9f8c;
        font - weight: bold;
    }

.ui - page - theme - a a: visited,
    html.ui - bar - a a: visited,
    html.ui - body - a a: visited,
    html body.ui - group - theme - a a: visited {
        color: #3388cc;
}

.ui-page-theme-a a:hover,
html .ui-bar-a a:hover,
html .ui-body-a a:hover,
html body .ui-group-theme-a a:hover {
    color: # 005599;
    }

.ui - page - theme - a a: active,
    html.ui - bar - a a: active,
    html.ui - body - a a: active,
    html body.ui - group - theme - a a: active {
        color: #005599;
}

.ui-page-theme-a .ui-btn,
html .ui-bar-a .ui-btn,
html .ui-body-a .ui-btn,
html body .ui-group-theme-a .ui-btn,
html head body .ui-btn.ui-btn-a,
.ui-page-theme-a .ui-btn:visited,
html .ui-bar-a .ui-btn:visited,
html .ui-body-a .ui-btn:visited,
html body .ui-group-theme-a .ui-btn:visited,
html head body .ui-btn.ui-btn-a:visited {
    background-color: # c7c7bb;
        border - color: #919191;
    color: # 2 F3E46;
        text - shadow: 0 1 px 0# ffffff;
    }

.ui - page - theme - a.ui - btn: hover,
    html.ui - bar - a.ui - btn: hover,
    html.ui - body - a.ui - btn: hover,
    html body.ui - group - theme - a.ui - btn: hover,
    html head body.ui - btn.ui - btn - a: hover {
        background - color: #b1b1a9;
        border - color: #919191;
    color: # 2 F3E46;
        text - shadow: 0 1 px 0# ffffff;
    }

.ui - page - theme - a.ui - btn: active,
    html.ui - bar - a.ui - btn: active,
    html.ui - body - a.ui - btn: active,
    html body.ui - group - theme - a.ui - btn: active,
    html head body.ui - btn.ui - btn - a: active {
        background - color: #7f867b;
    border-color: # 919191;
        color: #2F3E46;
    text-shadow: 0 1px 0 # ffffff;
    }

.ui - page - theme - a.ui - btn.ui - btn - active,
    html.ui - bar - a.ui - btn.ui - btn - active,
    html.ui - body - a.ui - btn.ui - btn - active,
    html body.ui - group - theme - a.ui - btn.ui - btn - active,
    html head body.ui - btn.ui - btn - a.ui - btn - active,
    .ui - page - theme - a.ui - checkbox - on: after,
    html.ui - bar - a.ui - checkbox - on: after,
    html.ui - body - a.ui - checkbox - on: after,
    html body.ui - group - theme - a.ui - checkbox - on: after,
    .ui - btn.ui - checkbox - on.ui - btn - a: after,
    .ui - page - theme - a.ui - flipswitch - active,
    html.ui - bar - a.ui - flipswitch - active,
    html.ui - body - a.ui - flipswitch - active,
    html body.ui - group - theme - a.ui - flipswitch - active,
    html body.ui - flipswitch.ui - bar - a.ui - flipswitch - active,
    .ui - page - theme - a.ui - slider - track.ui - btn - active,
    html.ui - bar - a.ui - slider - track.ui - btn - active,
    html.ui - body - a.ui - slider - track.ui - btn - active,
    html body.ui - group - theme - a.ui - slider - track.ui - btn - active,
    html body div.ui - slider - track.ui - body - a.ui - btn - active {
        background - color: #7f867b;
    border-color: # 919191;
        color: #ffffff;
        text - shadow: 0 1 px 0 #005599;
}

.ui-page-theme-a .ui-radio-on:after,
html .ui-bar-a .ui-radio-on:after,
html .ui-body-a .ui-radio-on:after,
html body .ui-group-theme-a .ui-radio-on:after,
.ui-btn.ui-radio-on.ui-btn-a:after {
    border-color: # 7 f867b;
    }

.ui - page - theme - a.ui - btn: focus,
    html.ui - bar - a.ui - btn: focus,
    html.ui - body - a.ui - btn: focus,
    html body.ui - group - theme - a.ui - btn: focus,
    html head body.ui - btn.ui - btn - a: focus,
    .ui - page - theme - a.ui - focus,
    html.ui - bar - a.ui - focus,
    html.ui - body - a.ui - focus,
    html body.ui - group - theme - a.ui - focus,
    html head body.ui - btn - a.ui - focus,
    html head body.ui - body - a.ui - focus {
        -webkit - box - shadow: 0 0 12 px #7f867b;
    -moz-box-shadow: 0 0 12px # 7 f867b;
        box - shadow: 0 0 12 px #7f867b;
}

.ui-disabled,
.ui-state-disabled,
button[disabled],
.ui-select .ui-btn.ui-state-disabled {
    filter: Alpha(Opacity= 30);
opacity: .3;
cursor: default !important;
pointer - events: none;
}

.ui - btn: focus,
    .ui - btn.ui - focus {
        outline: 0;
    }

.ui - noboxshadow.ui - shadow,
    .ui - noboxshadow.ui - shadow - inset,
    .ui - noboxshadow.ui - overlay - shadow,
    .ui - noboxshadow.ui - shadow - icon.ui - btn: after,
    .ui - noboxshadow.ui - shadow - icon.ui - btn: after,
    .ui - noboxshadow.ui - focus,
    .ui - noboxshadow.ui - btn: focus,
    .ui - noboxshadow input: focus,
    .ui - noboxshadow.ui - panel {
        -webkit - box - shadow: none!important; -
        moz - box - shadow: none!important;
        box - shadow: none!important;
    }

.ui - noboxshadow.ui - btn: focus,
    .ui - noboxshadow.ui - focus {
        outline - width: 1 px;
        outline - style: auto;
    }