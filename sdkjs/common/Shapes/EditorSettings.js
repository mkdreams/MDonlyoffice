/*
 * (c) Copyright Ascensio System SIA 2010-2019
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-12 Ernesta Birznieka-Upisha
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

"use strict";

(function(window, undefined) {

    var CAscColorScheme = AscCommon.CAscColorScheme;
    var CColor = AscCommon.CColor;

    var g_oAutoShapesGroups = [
        "Basic shapes",
        "Figured arrows",
        "Math",
        "Charts",
        "Stars & Ribbons",
        "Callouts",
        "Buttons",
        "Rectangles",
        "Lines"
    ];

    var autoShapes = [
        [
            "textRect", "rect", "ellipse", "triangle", "rtTriangle", "parallelogram", "trapezoid", "diamond", "pentagon", "hexagon", "heptagon",
            "octagon", "decagon", "dodecagon", "pie", "chord", "teardrop", "frame", "halfFrame", "corner", "diagStripe", "plus", "plaque",
            "can", "cube", "bevel", "donut", "noSmoking", "blockArc", "foldedCorner", "smileyFace", "heart", "lightningBolt", "sun",
            "moon", "cloud", "arc", "bracePair", "leftBracket", "rightBracket", "leftBrace", "rightBrace"
        ],
        [
            "rightArrow", "leftArrow", "upArrow", "downArrow", "leftRightArrow", "upDownArrow", "quadArrow", "leftRightUpArrow", "bentArrow",
            "uturnArrow", "leftUpArrow", "bentUpArrow", "curvedRightArrow", "curvedLeftArrow", "curvedUpArrow", "curvedDownArrow", "stripedRightArrow",
            "notchedRightArrow", "homePlate", "chevron", "rightArrowCallout", "downArrowCallout", "leftArrowCallout", "upArrowCallout",
            "leftRightArrowCallout", "quadArrowCallout", "circularArrow"
        ],
        [
            "mathPlus", "mathMinus", "mathMultiply", "mathDivide", "mathEqual", "mathNotEqual"
        ],
        [
            "flowChartProcess", "flowChartAlternateProcess", "flowChartDecision", "flowChartInputOutput", "flowChartPredefinedProcess",
            "flowChartInternalStorage", "flowChartDocument", "flowChartMultidocument", "flowChartTerminator", "flowChartPreparation",
            "flowChartManualInput", "flowChartManualOperation", "flowChartConnector", "flowChartOffpageConnector", "flowChartPunchedCard",
            "flowChartPunchedTape", "flowChartSummingJunction", "flowChartOr", "flowChartCollate", "flowChartSort", "flowChartExtract",
            "flowChartMerge", "flowChartOnlineStorage", "flowChartDelay", "flowChartMagneticTape", "flowChartMagneticDisk", "flowChartMagneticDrum", "flowChartDisplay"
        ],
        [
            "irregularSeal1", "irregularSeal2", "star4", "star5", "star6", "star7", "star8", "star10", "star12", "star16", "star24", "star32",
            "ribbon2", "ribbon", "ellipseRibbon2", "ellipseRibbon", "verticalScroll", "horizontalScroll", "wave", "doubleWave"
        ],
        [
            "wedgeRectCallout", "wedgeRoundRectCallout", "wedgeEllipseCallout", "cloudCallout", "borderCallout1", "borderCallout2", "borderCallout3",
            "accentCallout1", "accentCallout2", "accentCallout3", "callout1", "callout2", "callout3", "accentBorderCallout1", "accentBorderCallout2", "accentBorderCallout3"
        ],
        [
            "actionButtonBackPrevious", "actionButtonForwardNext", "actionButtonBeginning", "actionButtonEnd", "actionButtonHome", "actionButtonInformation",
            "actionButtonReturn", "actionButtonMovie", "actionButtonDocument", "actionButtonSound", "actionButtonHelp", "actionButtonBlank"
        ],
        [
            "rect", "roundRect", "snip1Rect", "snip2SameRect", "snip2DiagRect", "snipRoundRect", "round1Rect", "round2SameRect", "round2DiagRect"
        ],
        [
            "line", "lineWithArrow", "lineWithTwoArrows", "bentConnector5", "bentConnector5WithArrow", "bentConnector5WithTwoArrows", "curvedConnector3",
            "curvedConnector3WithArrow", "curvedConnector3WithTwoArrows", "spline", "polyline1", "polyline2"
        ]
    ];

    var g_oAutoShapesTypes = [];

    for (var i = 0, length = autoShapes.length; i < length; i++) {
        g_oAutoShapesTypes[i] = [];
        for (var j = 0, length_group = autoShapes[i].length; j < length_group; j++) {
            g_oAutoShapesTypes[i].push({
                "Type": autoShapes[i][j]
            });
        }
    }

    var g_oStandartColors = [{
            R: 0xC0,
            G: 0x00,
            B: 0x00
        },
        {
            R: 0xFF,
            G: 0x00,
            B: 0x00
        },
        {
            R: 0xFF,
            G: 0xC0,
            B: 0x00
        },
        {
            R: 0xFF,
            G: 0xFF,
            B: 0x00
        },
        {
            R: 0x92,
            G: 0xD0,
            B: 0x50
        },
        {
            R: 0x00,
            G: 0xB0,
            B: 0x50
        },
        {
            R: 0x00,
            G: 0xB0,
            B: 0xF0
        },
        {
            R: 0x00,
            G: 0x70,
            B: 0xC0
        },
        {
            R: 0x00,
            G: 0x20,
            B: 0x60
        },
        {
            R: 0x70,
            G: 0x30,
            B: 0xA0
        }
    ];

    var g_oThemeColorsDefaultModsWord = [
        [{
                name: "wordShade",
                val: 0xF2
            },
            {
                name: "wordShade",
                val: 0xD9
            },
            {
                name: "wordShade",
                val: 0xBF
            },
            {
                name: "wordShade",
                val: 0xA6
            },
            {
                name: "wordShade",
                val: 0x80
            }
        ],
        [{
                name: "wordShade",
                val: 0xE6
            },
            {
                name: "wordShade",
                val: 0xBF
            },
            {
                name: "wordShade",
                val: 0x80
            },
            {
                name: "wordShade",
                val: 0x40
            },
            {
                name: "wordShade",
                val: 0x1A
            }
        ],
        [{
                name: "wordTint",
                val: 0x33
            },
            {
                name: "wordTint",
                val: 0x66
            },
            {
                name: "wordTint",
                val: 0x99
            },
            {
                name: "wordShade",
                val: 0xBF
            },
            {
                name: "wordShade",
                val: 0x80
            }
        ],
        [{
                name: "wordTint",
                val: 0x1A
            },
            {
                name: "wordTint",
                val: 0x40
            },
            {
                name: "wordTint",
                val: 0x80
            },
            {
                name: "wordTint",
                val: 0xBF
            },
            {
                name: "wordTint",
                val: 0xE6
            }
        ],
        [{
                name: "wordTint",
                val: 0x80
            },
            {
                name: "wordTint",
                val: 0xA6
            },
            {
                name: "wordTint",
                val: 0xBF
            },
            {
                name: "wordTint",
                val: 0xD9
            },
            {
                name: "wordTint",
                val: 0xF2
            }
        ]
    ];

    var g_oThemeColorsDefaultModsPowerPoint = [
        [{
                lumMod: 95000,
                lumOff: -1
            },
            {
                lumMod: 85000,
                lumOff: -1
            },
            {
                lumMod: 75000,
                lumOff: -1
            },
            {
                lumMod: 65000,
                lumOff: -1
            },
            {
                lumMod: 50000,
                lumOff: -1
            }
        ],
        [{
                lumMod: 90000,
                lumOff: -1
            },
            {
                lumMod: 75000,
                lumOff: -1
            },
            {
                lumMod: 50000,
                lumOff: -1
            },
            {
                lumMod: 25000,
                lumOff: -1
            },
            {
                lumMod: 10000,
                lumOff: -1
            }
        ],
        [{
                lumMod: 20000,
                lumOff: 80000
            },
            {
                lumMod: 40000,
                lumOff: 60000
            },
            {
                lumMod: 60000,
                lumOff: 40000
            },
            {
                lumMod: 75000,
                lumOff: -1
            },
            {
                lumMod: 50000,
                lumOff: -1
            }
        ],
        [{
                lumMod: 10000,
                lumOff: 90000
            },
            {
                lumMod: 25000,
                lumOff: 75000
            },
            {
                lumMod: 50000,
                lumOff: 50000
            },
            {
                lumMod: 75000,
                lumOff: 25000
            },
            {
                lumMod: 90000,
                lumOff: 10000
            }
        ],
        [{
                lumMod: 50000,
                lumOff: 50000
            },
            {
                lumMod: 65000,
                lumOff: 35000
            },
            {
                lumMod: 75000,
                lumOff: 25000
            },
            {
                lumMod: 85000,
                lumOff: 15000
            },
            {
                lumMod: 90000,
                lumOff: 5000
            }
        ]
    ];

    /* 0..4 */
    function GetDefaultColorModsIndex(r, g, b) {
        var L = (Math.max(r, Math.max(g, b)) + Math.min(r, Math.min(g, b))) / 2;
        L /= 255;
        if (L == 1)
            return 0;
        if (L >= 0.8)
            return 1;
        if (L >= 0.2)
            return 2;
        if (L > 0)
            return 3;
        return 4;
    }

    /* 0 - ppt, 1 - word, 2 - excel */
    function GetDefaultMods(r, g, b, pos, editor_id) {
        if (pos < 1 || pos > 5)
            return [];

        var index = GetDefaultColorModsIndex(r, g, b);
        var _obj, _mods = [],
            _mod;

        if (editor_id == 0) {
            _obj = g_oThemeColorsDefaultModsPowerPoint[index][pos - 1];

            if (_obj.lumMod !== -1) {
                _mod = new AscFormat.CColorMod();
                _mod["name"] = "lumMod";
                _mod["val"] = _obj.lumMod;
                _mods.push(_mod);
            }
            if (_obj.lumOff !== -1) {
                _mod = new AscFormat.CColorMod();
                _mod.name = "lumOff";
                _mod.val = _obj.lumOff;
                _mods.push(_mod);
            }

            return _mods;
        }
        if (editor_id == 1) {
            _obj = g_oThemeColorsDefaultModsWord[index][pos - 1];

            _mod = new AscFormat.CColorMod();
            _mod.name = _obj.name;
            _mod.val = _obj.val /** 100000 / 255) >> 0*/ ;
            _mods.push(_mod);

            return _mods;
        }
        // TODO: excel
        return [];
    }

    var g_oUserColorScheme = [];
    var elem;
    elem = new CAscColorScheme();
    elem.name = 'Office';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(31, 73, 125));
    elem.putColor(new CColor(238, 236, 225));
    elem.putColor(new CColor(79, 129, 189));
    elem.putColor(new CColor(192, 80, 77));
    elem.putColor(new CColor(155, 187, 89));
    elem.putColor(new CColor(128, 100, 162));
    elem.putColor(new CColor(75, 172, 198));
    elem.putColor(new CColor(247, 150, 70));
    elem.putColor(new CColor(0, 0, 255));
    elem.putColor(new CColor(128, 0, 128));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Grayscale';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(248, 248, 248));
    elem.putColor(new CColor(221, 221, 221));
    elem.putColor(new CColor(178, 178, 178));
    elem.putColor(new CColor(150, 150, 150));
    elem.putColor(new CColor(128, 128, 128));
    elem.putColor(new CColor(95, 95, 95));
    elem.putColor(new CColor(77, 77, 77));
    elem.putColor(new CColor(95, 95, 95));
    elem.putColor(new CColor(145, 145, 145));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Apex';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(105, 103, 109));
    elem.putColor(new CColor(201, 194, 209));
    elem.putColor(new CColor(206, 185, 102));
    elem.putColor(new CColor(156, 176, 132));
    elem.putColor(new CColor(107, 177, 201));
    elem.putColor(new CColor(101, 133, 207));
    elem.putColor(new CColor(126, 107, 201));
    elem.putColor(new CColor(163, 121, 187));
    elem.putColor(new CColor(65, 0, 130));
    elem.putColor(new CColor(147, 41, 104));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Aspect';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(50, 50, 50));
    elem.putColor(new CColor(227, 222, 209));
    elem.putColor(new CColor(240, 127, 9));
    elem.putColor(new CColor(159, 41, 54));
    elem.putColor(new CColor(27, 88, 124));
    elem.putColor(new CColor(78, 133, 66));
    elem.putColor(new CColor(96, 72, 120));
    elem.putColor(new CColor(193, 152, 89));
    elem.putColor(new CColor(107, 159, 37));
    elem.putColor(new CColor(178, 107, 2));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Civic';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(100, 107, 134));
    elem.putColor(new CColor(197, 209, 215));
    elem.putColor(new CColor(209, 99, 73));
    elem.putColor(new CColor(204, 180, 0));
    elem.putColor(new CColor(140, 173, 174));
    elem.putColor(new CColor(140, 123, 112));
    elem.putColor(new CColor(143, 176, 140));
    elem.putColor(new CColor(209, 144, 73));
    elem.putColor(new CColor(0, 163, 214));
    elem.putColor(new CColor(105, 79, 7));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Concourse';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(70, 70, 70));
    elem.putColor(new CColor(222, 245, 250));
    elem.putColor(new CColor(45, 162, 191));
    elem.putColor(new CColor(218, 31, 40));
    elem.putColor(new CColor(235, 100, 27));
    elem.putColor(new CColor(57, 99, 157));
    elem.putColor(new CColor(71, 75, 120));
    elem.putColor(new CColor(125, 60, 74));
    elem.putColor(new CColor(255, 129, 25));
    elem.putColor(new CColor(68, 185, 232));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Equity';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(105, 100, 100));
    elem.putColor(new CColor(233, 229, 220));
    elem.putColor(new CColor(211, 72, 23));
    elem.putColor(new CColor(155, 45, 31));
    elem.putColor(new CColor(162, 142, 106));
    elem.putColor(new CColor(149, 98, 81));
    elem.putColor(new CColor(145, 132, 133));
    elem.putColor(new CColor(133, 93, 93));
    elem.putColor(new CColor(204, 153, 0));
    elem.putColor(new CColor(150, 169, 169));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Flow';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(4, 97, 123));
    elem.putColor(new CColor(219, 245, 249));
    elem.putColor(new CColor(15, 111, 198));
    elem.putColor(new CColor(0, 157, 217));
    elem.putColor(new CColor(11, 208, 217));
    elem.putColor(new CColor(16, 207, 155));
    elem.putColor(new CColor(124, 202, 98));
    elem.putColor(new CColor(165, 194, 73));
    elem.putColor(new CColor(244, 145, 0));
    elem.putColor(new CColor(133, 223, 208));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Foundry';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(103, 106, 85));
    elem.putColor(new CColor(234, 235, 222));
    elem.putColor(new CColor(114, 163, 118));
    elem.putColor(new CColor(176, 204, 176));
    elem.putColor(new CColor(168, 205, 215));
    elem.putColor(new CColor(192, 190, 175));
    elem.putColor(new CColor(206, 197, 151));
    elem.putColor(new CColor(232, 183, 183));
    elem.putColor(new CColor(219, 83, 83));
    elem.putColor(new CColor(144, 54, 56));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Median';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(119, 95, 85));
    elem.putColor(new CColor(235, 221, 195));
    elem.putColor(new CColor(148, 182, 210));
    elem.putColor(new CColor(221, 128, 71));
    elem.putColor(new CColor(165, 171, 129));
    elem.putColor(new CColor(216, 178, 92));
    elem.putColor(new CColor(123, 167, 157));
    elem.putColor(new CColor(150, 140, 140));
    elem.putColor(new CColor(247, 182, 21));
    elem.putColor(new CColor(112, 68, 4));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Metro';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(78, 91, 111));
    elem.putColor(new CColor(214, 236, 255));
    elem.putColor(new CColor(127, 209, 59));
    elem.putColor(new CColor(234, 21, 122));
    elem.putColor(new CColor(254, 184, 10));
    elem.putColor(new CColor(0, 173, 220));
    elem.putColor(new CColor(115, 138, 200));
    elem.putColor(new CColor(26, 179, 159));
    elem.putColor(new CColor(235, 136, 3));
    elem.putColor(new CColor(95, 119, 145));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Module';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(90, 99, 120));
    elem.putColor(new CColor(212, 212, 214));
    elem.putColor(new CColor(240, 173, 0));
    elem.putColor(new CColor(96, 181, 204));
    elem.putColor(new CColor(230, 108, 125));
    elem.putColor(new CColor(107, 183, 109));
    elem.putColor(new CColor(232, 134, 81));
    elem.putColor(new CColor(198, 72, 71));
    elem.putColor(new CColor(22, 139, 186));
    elem.putColor(new CColor(104, 0, 0));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Opulent';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(177, 63, 154));
    elem.putColor(new CColor(244, 231, 237));
    elem.putColor(new CColor(184, 61, 104));
    elem.putColor(new CColor(172, 102, 187));
    elem.putColor(new CColor(222, 108, 54));
    elem.putColor(new CColor(249, 182, 57));
    elem.putColor(new CColor(207, 109, 164));
    elem.putColor(new CColor(250, 141, 61));
    elem.putColor(new CColor(255, 222, 102));
    elem.putColor(new CColor(212, 144, 197));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Oriel';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(87, 95, 109));
    elem.putColor(new CColor(255, 243, 157));
    elem.putColor(new CColor(254, 134, 55));
    elem.putColor(new CColor(117, 152, 217));
    elem.putColor(new CColor(179, 44, 22));
    elem.putColor(new CColor(245, 205, 45));
    elem.putColor(new CColor(174, 186, 213));
    elem.putColor(new CColor(119, 124, 132));
    elem.putColor(new CColor(210, 97, 28));
    elem.putColor(new CColor(59, 67, 91));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Origin';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(70, 70, 83));
    elem.putColor(new CColor(221, 233, 236));
    elem.putColor(new CColor(114, 124, 163));
    elem.putColor(new CColor(159, 184, 205));
    elem.putColor(new CColor(210, 218, 122));
    elem.putColor(new CColor(250, 218, 122));
    elem.putColor(new CColor(184, 132, 114));
    elem.putColor(new CColor(142, 115, 106));
    elem.putColor(new CColor(178, 146, 202));
    elem.putColor(new CColor(107, 86, 128));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Paper';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(68, 77, 38));
    elem.putColor(new CColor(254, 250, 201));
    elem.putColor(new CColor(165, 181, 146));
    elem.putColor(new CColor(243, 164, 71));
    elem.putColor(new CColor(231, 188, 41));
    elem.putColor(new CColor(208, 146, 167));
    elem.putColor(new CColor(156, 133, 192));
    elem.putColor(new CColor(128, 158, 194));
    elem.putColor(new CColor(142, 88, 182));
    elem.putColor(new CColor(127, 111, 111));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Solstice';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(79, 39, 28));
    elem.putColor(new CColor(231, 222, 201));
    elem.putColor(new CColor(56, 145, 167));
    elem.putColor(new CColor(254, 184, 10));
    elem.putColor(new CColor(195, 45, 46));
    elem.putColor(new CColor(132, 170, 51));
    elem.putColor(new CColor(150, 67, 5));
    elem.putColor(new CColor(71, 90, 141));
    elem.putColor(new CColor(141, 199, 101));
    elem.putColor(new CColor(170, 138, 20));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Technic';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(59, 59, 59));
    elem.putColor(new CColor(212, 210, 208));
    elem.putColor(new CColor(110, 160, 176));
    elem.putColor(new CColor(204, 175, 10));
    elem.putColor(new CColor(141, 137, 164));
    elem.putColor(new CColor(116, 133, 96));
    elem.putColor(new CColor(158, 146, 115));
    elem.putColor(new CColor(126, 132, 141));
    elem.putColor(new CColor(0, 200, 195));
    elem.putColor(new CColor(161, 22, 224));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Trek';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(78, 59, 48));
    elem.putColor(new CColor(251, 238, 201));
    elem.putColor(new CColor(240, 162, 46));
    elem.putColor(new CColor(165, 100, 78));
    elem.putColor(new CColor(181, 139, 128));
    elem.putColor(new CColor(195, 152, 109));
    elem.putColor(new CColor(161, 149, 116));
    elem.putColor(new CColor(193, 117, 41));
    elem.putColor(new CColor(173, 31, 31));
    elem.putColor(new CColor(255, 196, 47));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Urban';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(66, 68, 86));
    elem.putColor(new CColor(222, 222, 222));
    elem.putColor(new CColor(83, 84, 138));
    elem.putColor(new CColor(67, 128, 134));
    elem.putColor(new CColor(160, 77, 163));
    elem.putColor(new CColor(196, 101, 45));
    elem.putColor(new CColor(139, 93, 61));
    elem.putColor(new CColor(92, 146, 181));
    elem.putColor(new CColor(103, 175, 189));
    elem.putColor(new CColor(194, 168, 116));
    g_oUserColorScheme.push(elem);
    elem = new CAscColorScheme();
    elem.name = 'Verve';
    elem.putColor(new CColor(0, 0, 0));
    elem.putColor(new CColor(255, 255, 255));
    elem.putColor(new CColor(102, 102, 102));
    elem.putColor(new CColor(210, 210, 210));
    elem.putColor(new CColor(255, 56, 140));
    elem.putColor(new CColor(228, 0, 89));
    elem.putColor(new CColor(156, 0, 127));
    elem.putColor(new CColor(104, 0, 127));
    elem.putColor(new CColor(0, 91, 211));
    elem.putColor(new CColor(0, 52, 158));
    elem.putColor(new CColor(23, 187, 253));
    elem.putColor(new CColor(255, 121, 194));
    g_oUserColorScheme.push(elem);

    var g_oUserTexturePresets = [
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/png;base64,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",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADkJJREFUeNp8WcuS28gR7DcADmckjbRehx1+3Oz9YX+UI3zxwTdH+GDvbtiWVpoHCaBfzqwCMZS0YQSHA4KNRnV1VlZW0T797U/GmHme7+5e55x7760Z7329uZliakteT8/OWOdNN6ZZ/BVr8c/EGEsprbVhGHCjaf37v//jV7/7TT0kfNsfTsvT6fjNvQkRH2utzjkMxr0pJTxuWM1pHO/evTv9+IOvj/FmqO5Q1qHn/2JkgAW4De/4gHfYZG2nWQYn2wGL1BQ55Xm/HOZyhMCpOE+MeHyRYbiIheq9Ov7q3IgLeMBqPLhz1rrNhhXjH5ZdeXAcb2m24BvnW+FhOw1TbwVnzdWxG8cpa6U/MKy1dV3V92r55wbpVd4hlhWj1lk+WmfHEqN4q+Kkd24QbILnohxYSY8RFvmwmdVrvjZod5isimY5sS/LId++uFaN25ch9zXZBLWYt3u56vQSTi7Ld+b/HpfxZp9an+fkUDDgwDA9ud7o61sIDmfkFowEeOW6qTpbwMpgE8zkYktXyOPgYq1rsmg4ijsv3krBfbF3u7c2hyhc1BWC8Z9dm7X6VXu56Po+GKBM+i+GwXQClJ7EpgaPiw1oC+F6E68nuvaEmkKrxD5Gj7rqc7O2GDJGPUp8tdxbdtg9x2jbzFKMw0+KDIJpe5h/AYTig07GxJ8ZtLsNdigci4Q2aMAWrAi70V4i+uqAWboYulki0crFvpkl2xyHUFqGvQAr5sKeOGyoAoPutI1/PWBb4QX4u2RbbUKoYn0uEhkAZZgKl+0MpjSDjW7toeUZEzrMVRh5xmMea6pZXRW+6QFhh4WX6pKtuLEnsMTGW4wg8aruYN8itWuIXDaALFHKCrNazc7ojnYsAO+gmHWdEe0+JGxArhkfPWyyfJTsznaiL910MicID+sFVJzbYzMoVIlriR2JALEycquNxZqUGrFEbIe3tjqCs+ouYHrHZbQYHfjcuooBcHbrqw89JdfzarFe2t+ZIZyMcdV1r9sqhLW9GIOBXghCTk2dhGM3rhH+ErEm00v4gw3wr67bbV68nHTPBeP5HWmqce8BLBeTX3JjHPOl02wfwYwav/BIXVfrMQNSWWgybViWRUlZYQtOV7NgrwZ7/xzetdGyWooXixCpoCq8Pz+fcDDZHRImwQlHPzwkicevj9bbdSDvMaFZh95SckMGVXiRHSQPvbDlJQ8KGrxsor9sIryLTbTHm7t6N0/TTUxTwASHI0nncCzzGc6Vl7mc8IXl6XMFW9ERBKAFb824YWvjG2WKy0dEp3Op1YIcqOgmVA1yOznZBrddRIwhEuUOZ1PJppwzMQHsQYA03B2dDQxjjCEusarkbEFKa4IZxRYg5rbsPmpO9OpAuE0NEoIwBeg2agIC+mIWmKFSY4DnjORsYNAEpgw8L8YhpdHEgbloqDGmTF9iBQHrJewbnB0kbnwcU6V7BD/zGR4zAygEAKBfyB54AZdrbYXsAypyOPfGr+c1WCwKQRnpFHhKYQ1XAPhwJAIQD0UigAcswiwvbY4gpTzj5NPp4+hh95LLudQZJ3iIniCM5vMy57UisEBhBnKtwqHgRDBjNyUoY+km7lmsXR3EGdzDN7J9xSrgok2GKPNzB5d5QUwBsPquQIYndDcU1HuCkqRE0gKgb25uvF/NOALmZd1yQbBXx3VW+SJdbPAnNdi+fSvvjgnWSKCM46hIUEho9EDj6bK/SD4YAKrEAkAFAdbH6PXRFntWg0oRVSb6+F2iqCN3raLPkxygp3KLx/YSfWkcd+GgvgdGRb1twfRFdteHqlnAVwAPiBYFqnFH2CXUtUD7wk/XBMMNAupr06Qq0pdmQXDo4+EzmK50qKGtRPiFz7C/fRzgs8PhkGIxw2AFKpILRTTvwNJZFAS4vgvOdoEF5szI6Bez+CTsqQPc+ml+BJ2qjsBd5/MZ3sIkEAEbJ3+uTmFWjWErI+omCPmGUEWG2CF/7eS9iPgabYonI1JANpKuQnTe3d3BTxiM1eucgDMGLHneAXC9ITHELL7HAvJyQlwMiQkQPEezNAkqpHYwCTm6iw1uH4CEM8SB1EgGeTGL2PKgCoe9gxvalnSDbIq/hsR+DqNBqTozcwr8ulEBX6InCBCKFU+soM6h7HAqIVTeitqQPeht3urEKjTPokjKtF4T00HPG4YM198KCFVQL6mW/IzRLUKLzyYmLAXipddgpkM9+hJnVwaDzCWQvzhjIy31EDgQaat1sBvoDmqxGFH0VvWB2RS0AFEjy4OP17IEMlrLtax5wbuNoo9EcgPDIjloagBDY1gB2507mC6MHvaFWOnsEvZ6V2VGqWWDAtbVKzgfK+KiqKxotN8j1O6Y038IjhX0baEyKV2gi7KkQlmqEzbuVfQNJRcG46Zh8Ld3hzjUARNbJLYlBbo+KBWJdpC6qm/lVDELnoQ9lZdsrmyq6Reg2M/gAjo0EE2Q30PU3ACxha/WBuZmSjE6iUhLfAwRXy2n0/L0/DGBTMJhmIYQBkvqagFRrRwBHzF1lIVlNGZK5DrAViGsxAGLy3qpfLaQsKqsPy2PBRuwnpukrvMJO2gArekQfrbehKQ2o0XY9vt7mOWqR8Ja1nOCCMdz8cVFcjEiYvWIEdJmz4Jk4pRQVczB+z3bl9SzBSO9NU69Y7kuxYHbfQiH6XZZmGAYGE11t1PVhY/wKkXQefnw/uOQ6006Qp15aCSqjL7lRMGNUX8ouwDCEDgQJ4wLCXUd6dOW9fpepItZzkNFYtehPzyJB2tNB8SNln4Eu9GKC/NTNtZiMBVuGrB5rg/xgFp0qX0ME+qVsKewnVH0YyXGjRRATl69SRy6rqlTNKaAXks6UQQcLP2VLrHBIPUqmhtXLLqNY3AHymYwFPTG6XSuax+OUwTIReiStypVqE/jALadhqGtjmq2mjTF9+9/mobXYIflnCV794IypvWv6VEqighL81xHiC/UJ2ZtIzgu33gSiTYBSJtkCMClLetDNymkYaRFcxwKF9hQ2Z8NalXpTNDOwOoe6/B0e3BAbgjblm4nlIwumPR1j4SDGIqs8VOKSAJMAzEybbdlEyZa4xurJVZCrgwYaeCO+fRxHc7Tm8lME6CFQgHZlB0QoAExGKQVwhJZemAW6O65iTbjEpGkwdbN/axZIGdRAIW9IK1OW937RFeabvtPEQCmkBSGGk5zPICGByIrwEXCW8S6ArlKpDRduvZ3JAgFtaZ90Rh6ET8tx0Ciqi1vxbGovGA1Pci0RJ2RJgKU/rRaRWGX3oUX1bRi2+CvwN5BV1AzRoQOrDA36ae3rfA1hVODhq+7gdcOq0yjgKwRLVSkZVqRf4Z4EQ7ybi8sjDEW2i/54/E4VDO4BE0CVNN/jv0tI10vWI5awYmMZtpCom7l7MAvkTUtexgYU439qjF0EcFeO4gIDHZfsPoQRKAWzYmiZlkuwXS82A7GkxCPnfIf8RQ5SbBtBnJC9IfoI3fRtq3io1qocGZGikM+TFOrZxoaESZOi/GvgxHQMMIsIyDfEfJ0zwCsrPnSzBQauhTZw5hOpQHvDw8PcX0qMY0RKvI29hl2BjKbMAIKFjAswkKDORfz/v2Hw/RqHA/Pz88wa5zCsswvufpz41jNlfXx4cOb2yOme1qWV7Wf1jzZqgDvZuueqeid57kYB1vevXt3519764u7ORE2DKwwpTdujGYcaphQ9KUJWYdNdnezmB++f/3ta7b2DkeV0TEc7sZfmb5Xa9LVlIane/XtcHf76sN/5tNjK/Xbbw7x1f38/Q/MyGTnAhqA9dM0nJ7rTz+tv//NvYGzPj389c9/KQ+Ph3H67R//cPvLX6wFWrKFjw//SsuQ1vHp6RPLKZbrqAURBShGl9PT0670NeI+Pfzz4idVLJvPoEvre/P4038HD4lWPz6YV+6+m6duxg54+RYSdrMizqyv46E+PT35g3/79u133303gOSsG+/fFGa2OTQUZG5hl46QPDOt2swy2/Xbw9v7u1s4kL2eVncxY8e8CXz70sGmCHavvMO7jSwRPDJQ8m5gvQesFHzlQpUmLVnwaMPBH4on2DE5smmQunLN+ThQIIVpGBEeSJoL6NkjHr0kvZKXM+bCPwFrvVSIfWuQd3P5CaJp139I9wlpyibPwrCyHQL2yXah/qToAEGKQCqqOotjLspKQ459G+uZ5FEQYXgAxUCRQhhAFUMldJYj8rtOOMcEblyEQ6toSppVZhUdXRIJOzJkYIt7EXK51DOmZ3+iQL/PENzRTXjolicwD/sspCPaOrJ7NUFZtQ41wYKMzcbBWZBwk9qwsWKgImEzkx3FADn76jaNiRxYRPlAtxTI7bRXZXsU0lw3pWmcVnZncYFq5fZNWN0UQP7aASXTSuNJ2nou9gQnZITk+fmEdYCczGFK6Sjd97i6fuavKSGz4DLVg9p7fl6JpHNhlYfEC9e4yKzOOCXEkLisGsRdgH/dEfHePaqaJn155JCQK1Y0V/lRTdvrXoRNBiXCMfCJEc7YamMkR1+WMxsFrT0ieNfSULQA8TWvEZlmzW56q20IgLcIESAOWI9QtXLNVjvQFDryE1J6OLfTKb9Pganucf5wTM9L/zT1gzCIFtbVsxICJ59zJosj4TD8U9KmGiqliLodKmn1kz+M2OKcn5mzQxPK7qOpP/7w729++WsoNmlBtVgdYrK5iWZRyumvKVWrjZBHFFk+3tnTwkx1Mzn/eqQmJZFC6ra8aosMm8bfB6BrwvQ8P6/LeXTz+TTf3Uwmj9atLH29PTbmwknStTduSxQ1n2tOvSJOo2FLE14H50Qj4FA5urdi6H82liMrPelcW6Q3niO1jh5Ez9iVFAe5alAgZbhAcmbQfoQzlyYPs3H5nwADAP/upUmMy6b8AAAAAElFTkSuQmCC",
        "data:image/png;base64,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"
    ];

    var g_sWordPlaceholderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA5dJREFUeF7t0rEVgkAAREG4BgjpvzvJsAA9DSiBHzFbwAb/zTrnPN7fxRS4r8C+jfV1fu479KTAVWAooUBRAKyiqs8FLAiSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSAKwkq1OwGEgKgJVkdQoWA0kBsJKsTsFiICkAVpLVKVgMJAXASrI6BYuBpABYSVanYDGQFAAryeoULAaSAmAlWZ2CxUBSYOwbW0nZJ5/+Uf0Ahm8Ksdfm760AAAAASUVORK5CYII=";

    var g_oPresetTxWarpGroups = [
        "No Transform",
        "Follow Path",
        "Warp"
    ];


    var g_PresetTxWarpTypes = [
        [{
            'Type': "textNoShape",
            'Image': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADCUlEQVRoge3WPUjjbADA8SCoNdWoUCtauoi2YFWQYuvgooO46SIoqODoIC7qIIJuVkV0qIgdBId2UWslRRCtiIg6CA4dMnUrQpEKIfixmP87vbmTE3zf68HljvwhQ/J8kF/gKRX4SxJ+9wv8qiyI2bIgZsuCmC0LYrYsiNmyIGbLgpitn4YoioIg/Jrv4PV6kWW5oD0syB8HOT09pbe3l6qqKjweD6urq8A3yPLyMk6nk/r6enZ2dox1l5eXdHR0YLPZaGpqIhaLGWOJRAKPx4MoikxOTtLY2GhArq6u8Pv9VFRU0NPTQyaTKRySzWaRJImjoyOen585OTmhpKSE+/t7AzI6OsrT0xNnZ2eIosjt7S2Pj49IksT6+jqapnF+fo7T6SSXy5HJZCgtLSUWi6GqKouLiwiCgCzL5HI5KisriUajqKpKKBSira0NXdcLg3yW1+slkUigKApFRUWoqmqMjY+PMzU1xe7uLs3NzZ+uX1tbo6ury7h/f3+nrq4OWZbZ3t6mu7v7w3yXy8Xd3V3hkM3NTQKBAA6HA1EUEQSBw8NDFEWhpqbmw9yFhQUGBwdZWVmhr6/v0/1mZmYYGhr68KyzsxNZlpmfn0cQhB+u/f39wiAHBwc4HA4uLi54fX0FwO12E4/HURSF4uJiXl5ejPljY2NMT08TjUZpaWn5dM+NjQ2CwaBxr+s6brcbWZYJh8P09/d/+dL/GxIKhfD7/ei6jq7rhMNhBEEgFosZZ2RiYoJ8Ps/x8TF2u510Ok0+n6e6upqtrS00TeP6+hqXy0U6nSabzWK324lEIqiqytLSknFG/j2Te3t7aJpGMplEkiSy2WxhkIeHB1pbW5EkCVEUGRkZYWBggLm5ORRFoba2ltnZWcrLy/F4PMTjcWPtzc0NwWAQURRpaGggEokYY6lUCp/Ph81mY3h4mEAgYPxqpVIp2tvbKSsrw+fzkUwmv0R8Cfm+t7e3/zr1t2T91zJbFsRsWRCzZUHMlgUxWxbEbFkQs2VBzJYFMVsWxGxZELP110D+AaZ5qZil4yhUAAAAAElFTkSuQmCC"
        }],
        [{
                'Type': "textPlain",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textStop",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textTriangle",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textTriangleInverted",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textChevron",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textChevronInverted",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textRingInside",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textRingOutside",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textArchUpPour",
                'Image': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAECklEQVRoge2YIXDqShRAr4iIiEAgIiIqIiIqEIgnIhCICmRFRUUEAlGBQCAimEFEIBAIBKICUYFAVCAQERUIBKICEYFAICIqEBUR54sOO+W39ENL52fe5DjYze6eZe+9G4S/BPm/F3AuMpG0kYmcwmq1+vU5fk1kOp3iui4igoig6zrlcpmnp6dfme9XRKbTKZqmUS6XeX5+BuDp6YlisYiu6+q7c/JtkSRJGI/HtFot2u323vHxPA9d19lsNnvPzOdzCoUCnU4HgDiOGQwG1Go1Hh8fSZLku8s5TmQwGOwtarlcYts2FxcXuK6LpmkYhqGOjed55HK5L8dcrVYYhoGmabiui+M45PN5ZrOZ6rPZbAiC4Dwig8EAEaFYLLLdbonjGNM06XQ6agdnsxm6rlMoFACo1+tomsZ2uz04bqlUQtO0vZjpdDqYpsl6vSaOYy4vLxERWq3Wz0Wm0ymGYSAiuK5LEASUy+UP/XzfR0RYr9fMZjNEhOFwuNen0+nQ6/XYbreICI1G48M419fX+L6vEkU+n2cymfxcBOD5+RnHcVQGajabn/YREcIwBKBarWIYBpPJhCiK6Ha7aJrGaDRisVggIszn84MbIiI4jkMURccs8fhg32w2XF1dqWP278CMoggRYbFYAG/JIAgCLMtCRLAsi/F4DMB6vUZEPiwySRIKhQIiQrlcJo7jY5d3WtZKkoRqtYqIcHNzw8vLi2prNBqYpnl05ikUCtRqtU/HrtVqJ2ewb6Xf3TGxLAvf96nVaui6rnb8GBaLBblcjkqlQr1e5/LyEk3T6Pf731nSf4vc399TKpVotVp7WWgymZDL5XAchyAIjj7L74miiCAIcBxHxRPAdrtlOBzieR6+73+oRyeLPDw8qMDbnfOHhwfVvlwuubm54fX19WSJHbsjtVwuldz7xCIimKap2k8WSZIE27YJgoDVaoXruuTzeRXs0+n0R5X4qzk1TePi4oJ2u00cx1QqFVWjThYZj8c4jqM+27ZNGIa0221ERKXSczIajdS44/EY27aBt6uMZVkf6tJ7Dop0u108zwNQBWyXDovF4t5V4lzc3d1RKpWAt18nn8+rdO77PvV6/eCzB0UajYa6GsxmM0zTVG2e5325O98lCAIlAnB7e6sumM1mU23sZxwU8X0fx3HYbDaEYahEdkVrV8HPSRRFGIahArvb7XJ9fc1yuVQxc4iDIrtrxC7YRQTP87i6usK27bMH+o56vY6u6/T7fUajEblcDl3XMQzjyzfNL9NvGIYqFnq9HoZh8OfPn197y9sxGAxoNpuEYYiu67iu++m97D3Znw9pIxNJG5lI2shE0kYmkjYykbSRiaSNTCRtZCJpIxNJG5lI2shE0sZfI/IPnK/mbji+lKgAAAAASUVORK5CYII="
            },
            {
                'Type': "textArchDownPour",
                'Image': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAE80lEQVRoge2YL2zyThjHH3HJi6ioQJxAICoqKioqumRiAoFAICpegahAIBCIiQnEEsTEBAKBQExMTEwgEIiJiQkEogKBQFQgKhAVFc1y4vsK0gsH7G9YfvwWvgnm+nD3fO6eP9cSfonov3bgUDqBHJtOIMemE8ix6QRybDqBHJtOIMemE8ix6QRybDqBHJtOIMemE8ix6feCPD8/w3VdFItFVCoVjEYj+Ww8HqPVailjh1YYhuh2uyiXy3AcB4VCAXd3dwCAer3+5toKSBiGYIyBiJTf/f09AGA0GqFQKICIUC6XkabpwQDSNEW9XgdjDJxzXFxcwHVdEBFGoxGSJJH+dLvd90Fubm5ARLi4uEAQBBgOh9A0DbquI45jaff4+AgiQrvdPhhIp9PZcTLzZzqdAgB6vR4YY2CMKf7sgFxfX4OI8Pz8LMf6/f7eXdB1HbZt7zgUBAGEEG86LIRAEAQ747VaDYVCQRnzPA+5XE45+VarBSLC4+Pj2yDZDry8vCgLm6apnEocx/LkNjUYDFCr1T4E+fv3L/r9vjJ+d3cHxhgWi4W003Ud5XJZsRuPx0q47wVZLpdgjKHZbCpGo9EIRATP8/D09ATHcaBpGiaTiVy03W7D87x3ITZhPM/D1dWVtBdCwHVdmKaJ5XIpw7fX6yn/7Xa7O1GzAwKsj5gxppxKmqaoVqsy2RzHkXGbJAnK5fKnIbZhKpUKkiQBsN5Izjl0XYdpmsjlckouJEkCwzBQKBR2Cs0OSJIk8DxPOlypVKBpGogIuq6j1+tJh8MwhG3bKJVKCILgS1VMCIH5fA7XdWFZlgyp+XwOy7JARMjn82i32xiPx+j3+ygWiyAiWY7fBcnk+75SghuNBlarlXw+nU7BOQcRyZJtmuanYbLSmv2Xcy6jIEkSWYq3W0G9Xt978ntBJpMJcrkciAi2bctcyJQlJucc3W4X8/kcvV4PRIThcKjYZlUqCx8AGA6HICJcXV1hsVhgMBjAMAwwxpQkjqIInU4Hvu/D9/2duT8EieMY+Xwenuft7HC73ZYNcdM5YF2SO52OsiFZOBSLRcznc7kRRITlciltkyRBqVSSgF/JtzdBgHWZ23Q0SRJUKhVZvfYtlMvlZJWJogiccziOg5ubGxiGAc454jiWINsSQihrbG/Ut0A2tVwuYdu2zIN9C8xmM6VReZ4HwzCk7WKxAGMM19fXmEwmIKK9jTGrTEQEy7IQRdFhQF5eXpDP52WyDQaDvXZZyEVRJPvRtu3DwwOiKEKapmCM4fLycu9cg8FArsc538nRb4FMp1NomiarzHYjAta7yDmHZVkA1ledP3/+yJzYJ8dxoOu6UgkzBUEgC42maUpP+zZIBpPdPvfdPJvNplLfTdOEaZrvzpntuu/7bz6L41g23o/0pRerUqkExhgeHh4ghMBqtUKj0QARwTAMCCHw+voKXddxdnb24Xzn5+cgIrRaLQghIISQN+7sdD+rL4FEUSTfRzZ/m81stVrtvVBmqlarYIwBWBeI7NawPV8Yhj8Hkjl6e3sL27Zxfn6OWq2m9IM0TaFpGjRN2+lBQghZODKFYQjf92EYBizLQqvV+jLEt0A+o1qtpoRMpuzlqVqtHnzNHwGZzWayFxiGAc/z5EWQc47ZbHbwNX/sK0ocx2g2m3BdVyZvo9H4dIP7qn7v56D/q34NyD9R1OIfzRsxNwAAAABJRU5ErkJggg=="
            },
            {
                'Type': "textCirclePour",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textButtonPour",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textCurveUp",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textCurveDown",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textCanUp",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textCanDown",
                'Image': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAGkUlEQVRoge2ZLYwaWxTHTxPETTuCJjRB7DaTZgUCgUCQFjECQROaILbpCsSIbVKBQKxYgSBZsWkQKxCbhmQRK1bQBIFAbFLEiArEpkGsQCAQIxCIESMQ/yeaczv3zgxveW/b1/TtScZwz3DO73LP14Xwhwj91w7clzyA/G7yAPK7yQPI7yZbgTiOg1wuh5ubm5/lD6bTKXK5HL5+/brVe1uBjMdjEBHG4/FWRn6FjQeQnyUPIL/CyK+w8WeCrNdrdDoddLtdeJ53b0a2kU021us1er0eut1uaE0BOT09BRGBiFAsFrFcLu9s5L5kk41yuSz9Gw6HypoCUiqVpCIRIZ/P39nIfUmcjW63q/i2v7+vrCsgpmkqykSE6+vrSCOu66LRaKDf7/9r5weDAer1OlzXjQRZr9fY29tT/MrlcptBDg8P0ev1kEwmQUSoVCqRILlcTn5pr9eLdNDzPFiWBSEE9vf3sVqtQjr9fl9+TzabxfX1dQiEPzMMA81mE7lcDqZpbgaZz+cAgMlkAiJCKpUKgRwdHSm7k06n4ft+yEnbthU927aVdd/3kUqlFJ0PHz6EQOr1OogIV1dXClgsSLFYVBar1SqISAY9g6TT6dAR1H+VxWKBRCIR0ru9vZU6l5eXoXUGC4Lk83mk02ms12v5mRAiHkTPBJ1OB0QkO1EGISJkMhk4jiNhS6WS8u7x8bFyZBiq3W5LHc5C5XIZw+EQ2WxWvhMEMQwD9Xpd+f6NMRIkDjrOux0E4SBfrVYQQsAwDOX9QqGgvMtZJwicTCaRSCTguq7cSB1kOp2CiHB5ean4ZllWPIguHCc6SCqVUpzmWOA5ZT6f4+nTp3j58qUM8NVqhWw2ixcvXgD4fvSi0ihnTgbhZDCbzRS9g4ODu4PM5/NIEP0YnZ+fK7+S4zggIjQaDUWPgVerFQaDAYgIZ2dnik6tVlNAWq1WKLABbK4jdwXRHWTHT05OAAAXFxcgInz69EnR+/jxI4gIjuOg1+uBiDAajRQd7i4YhDMky3K5lBsSCzIYDFCpVGDbNmq1GnZ2diJB9F5nuVwq6fXk5AREhMlkouj1+31Uq1W4risTCcdHUCcIYts2TNPEYrFAs9mU9W0jSLCXiUqtDKIHHgAFhPN+VG1hiTsyemW3bRuJRCKUyvf29uJBoupDFIiepgEglUrJc1ur1fDo0aONIEdHRzAMI/Q5H1MGsSwr5I9hGHAcJx5Ef4HbEB3ky5cvIQd2d3dRLpcBAG/fvsWTJ09iIQDg/fv32N3dDX3+7du3jSCWZSlFNRak3W7DcRy4rhsb7PpuAN/TJuf2N2/e4NmzZxtBDg4OQv0S8CPBMEixWIQQArVaLdJuJIheLeNAotr4IIhlWZFOBsWyrNA5jwKxLCvUOrEvsSB6tfynIKVSCc+fP/9bkCjY2WwWAonSq1ar8SB6oeMv3Rbk9evXStccJeVyOdJB3YZlWUin0yG9QqEQD6JXy7heKwoklUopMfL48eONILZtRzqo2+BKvxWIfrS4+uogFxcXoS82DAPv3r0D8D2Qo4xza+L7fmR1BoDRaKSANBoNEBGm06nUWS6Xm+uIvshDjg7CrUjQQR6KgB8FUb+J4RrR6/Vkm69PjWdnZwpIu90OFeHhcLi5+zVNU/Y+vu/LAqmDsMMsOiBXbb1Fubq6kk7qsw7L4eGhAsKtfXC6tG07NG0qIIVCAdlsFsvlUhmMdBD9doWd4lGUHT4/P1f0eLdns5nsfjudjqKTz+cVENd1QURIJBIYj8cYjUYQQuD4+DgehHeSH+5vTk9PFRC92eOY4HmE5xi9S65UKiAirNdr3N7egohQq9Xkuuu60mYwobx69SrUdXz+/DkehB3gx7ZteXOhgzAcz+ZCCNlbeZ6HRCKBnZ0dOYD5vg/DMJDJZKS9ZDIJIYTcFI4HHUS/7NAHuxBIcHfT6TQWiwVM05TnkUGy2SyEEGi327If04OPR10+OjxnBGdv/oUKhQJarRaEELJND4K4rgvDMCRIq9XS3Q6DeJ6HTqcjr4Xy+bx0kkGC8cOPftabzaZcC178BTtnTu/BhzdSr1X9fh+ZTCYUG7EgujiOI7MRg9zc3EAIIY0nk8lQGuX2Jvgkk0klJfNx43UhRGiwuqts9beC7/sYDofwPE+58I66HQd+FDN+gldBLJzh+Jd2XReDwSDy34B7A9FlNBopd8O6eJ4nW5FGoxEKUJbJZBKa3beV/+f/7L+z/DEgfwGqM5x9rUdafgAAAABJRU5ErkJggg=="
            },
            {
                'Type': "textWave1",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textWave2",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textDoubleWave1",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textWave4",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textInflate",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textDeflate",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textInflateBottom",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textDeflateBottom",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textInflateTop",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textDeflateTop",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textDeflateInflate",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textDeflateInflateDeflate",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textFadeRight",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textFadeLeft",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textFadeUp",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textFadeDown",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textSlantUp",
                'Image': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAE8UlEQVRoge2YL3DqShTGj1gRERGxIgIRgUBUVFREIBCICAQCgahAVFREVFQgKphBICoqKiIrIioQFRWIiAgEAoGoiEAgEBERKyIQiO+KO9nHkvTPu49C3p1+M53pbs9u97d7zp6zIfwlolMv4FD6ASmbfkDKph+Qsql0IMvlEqvV6l+PKxXIfD4HYwxhGL5rE8dxYX+pQMIwBBEVgkwmE5imCSJCo9HAZrNR/v6/ABmPx2CMgYjkj+d5ik3pQeI4hmEY6Ha7EEJgNptB0zScn58rY0sP0u12cXZ2hu12K/va7TYqlYoyttQgaZqCMQbf9xU713VBpC69FCCe5+Hq6gqPj48KyHg8BhFhuVwCANbrNXq9HhhjYIwpc5wcpNfrKUG8C+K6LjjnEELg7u4OmqaBiNBsNjGfz5V5TgrieR6ICP1+H77vQ9d1BcRxHJimKa/dWq2GyWRSONdJQarVKm5ubmT77u5OATk/PwcRgXMOz/NkwIdhiF6vp8x1FJA0TTEejxV3mE6n0HUdQgjZFwSBAlKpVFCv15GmqTJfo9FQNgA4AkgYhtI1dhd5dXUFx3EU2+VyqdhYloVms6nYxHEMxhim06nS/0cgz8/PeHt7+9RusVhA13WYpolarQYiQrfbBfDbbe7v7xX71WqlgDQaDViWpeSQXq+XyyF/BPJRPbQv27Zh2zaSJMF2u8XZ2RkajQYAgHOOp6enD0GyG200GiFNU5k/Hh4ejgeyWCzAGEMURbIvCAJsNhtsNhsQUQ5kNpspc08mk9zVnJ3owUGEEAiCIPeGuL6+RqfTKZwj2/n9jP309FRYohARDMPAcDhU3OxgIFEUyUDWdV0JQE3TchVqpvV6DSLC4+Oj0p+50v5pv/cGOQhIEASoVqvgnMMwDBCRPIEkST51P8YYXNdVFptl7q/E38FAOp0ObNtGmqYQQsCyLFn/zOdzEFHO3dI0le6UbYIQAmmaot1uo91ugzGGxWJxPBAiUv5hlpVXqxVeXl4KQQaDAUzTBPCP71cqFXDOoes6lsulLBAPCrLdbhEEgbLgDGQ/mWWBOp/P5e/7IM1mU457e3uTtdV+fB0UZDKZgHMudz/bqQxkNBrl7IkI0+lUguwubrvdQtd1JcCjKILv+1iv1/8J4l2Q4XCYeyNnSWg32ItAVquVtNnN3P1+H5qmKbXVIZUDyQq3TqeDJElkkhoMBgrIbDZTxmWnIIRAFEUgIliWhTAMMRgMcmDfCpKVEZ1OR0k8RSD7/j8ajcA5l+1Wq6WcqOM47yazg4Nk1+ZucMdxXAiyXzQ6joPLy0vZjqIItm2jVqt9mJEPJQXk4eEBlmXJdhzHsmrdB9lNWkII6LqOl5eXb13sR1JAXl9f5U4HQaCU3/sgu7eP67qwLCv39e+YKry1PM8DYwz1eh1CiEIQ0zTx+vqK4XBYWAAeWzkQ3/dlcGblRxHI7vX8Xml9TCkgSZJA13Xl1squ0uyNnIH4vg/HcXKJ8VRSQEajEQzDUJJWv98HEcmvFmEYolqtIkmS4670Eykg9Xod7XZbtoUQMAwDnHPYti37ThnU70kB4Zyj1WoB+F1y1+t1uK6Ly8tL3N7enmSBX1UORNM03N/f4+LiApZlIU3Tb09mh5ACsltWWJalfDgouxSQKIrQarVwc3PzpXdymXTyr/GH0g9I2fTXgPwCxRmiuVvgWoIAAAAASUVORK5CYII="
            },
            {
                'Type': "textCascadeUp",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textCascadeDown",
                'Image': "data:image/png;base64,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"
            }
        ],
        [{
                'Type': "textArchUp",
                'Image': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADYElEQVRoge2YoZeqQBSHjfsHGDYYCAYCYQLBQDAYCBsMGzYQDASCkWAg2AwGosEwwWAkGAwGAsFAIBAIBgLBYCBMmDDh98I7yzmsuuuuso/zDl/ycB3v/YB7Z44t/Ce0/nUBj+JXRDjnOB6Pleb4FRHf99Hv9yvN8Wsiw+Gw0hyViqxWKwyHQ8znc4xGoypTVSdyOBygKAo8z4Msy5hOp2ffYYwhjuOH5LtLhDEGXdfR6/Vg23YpRiktinccB67rluJhGOL5+RmKosAwjHvKAHCnCKUULy8vAADXdZHneSm2XC6Lz5TS0lpN0xDHMYQQUBQFp9PpnlLuE/E8D5PJ5GIsjmOMx2MAwHw+h+/7RSwIAjw9PcEwDERRBFmWL4qcTies12swxr6s5S4RzjkIIeCcAwD2+33pqQwGA+R5Dk3TEEVRcX25XMLzPLiui263ezbRkiQBpRSyLKPX60FRFAghHiOSZRn2+/3Z9eVyWfTHdDotFbzZbNBut0EIQZqmxXXHcRCGIRhjSJKkJA/8HdetVqvoqzAMv6zvqkgQBDBNE4wxRFGEdrsNVVWhaVqpKACwbRtvb28ghOBwOJRil+7ker0GIQSapmG73ZZix+MRqqqWhsUtXBXhnMO2bciyDMuyih9NkgSapp0dOcIwxG63uzlxEARnN+RdIgiCm3/nnS9frTAMQQhBr9cr7m4URRgMBt9O9hnvo/wnEsCNPSKEwHQ6xevra/EkDMNAlmU/SnqJ8XiMJEl+vP5bUyuKIvT7fZimCV3XKz/RUkqLqfVxw/3It8evEAKu65am06PhnMOyLMxmM6RpijzPoSjKpzmvijDG4Pv+TZvRo3jvQV3XS69ZlmWQJAme511de1FECAFZlqGqKmRZxmg0+nET3kqe53AcB0IIdDod7HY7bLdbzGYzdDodGIaBzWZzdf1FkSAIQAgB8HeTM00T4/EYkiRhsVhUIkIphW3bSJIEs9kMkiTBsizsdrvi5PAZF0WyLEO320WaplgsFsUeYlnWxd39EXDOsVqtQCm9aSf/yNUe8X0fm80GaZqCEILJZAJVVStt8nu4aWpxzpGm6d1H7Spp/g6qG41I3WhE6kYjUjcakbrRiNSNRqRuNCJ1oxGpG41I3WhE6kYjUjcakbrxBw0K0kIhG+liAAAAAElFTkSuQmCC"
            },
            {
                'Type': "textArchDown",
                'Image': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADnUlEQVRoge2YIXTqPBiGEROICQQCgUBETERUIioQiAoEAhGBQFQgEJMIRM+pQFQgKhAIxASiImJiAlFRgZhAICoqKiYqKhAViIj3ip31p3+BAWN3vTt9FHxJz/meNPmStIBfQuGnE7gVuUjWyEWyRi6SNXKRrJGLZI1cJGvkIlkjF8kauUjWyEWyRi6SNXKRrPE7RYQQ4JyDcx7/Hg6HCMPwp/I7m4RIu92GoihQFAW9Xg9hGGIymaDRaPxUfmeTEKlWq9hut9jtdqjValiv1wiCAHd3dz+VHxzHgRDi034JEVVVYRgGhBCYzWaQJAmSJMEwjG9L9BRRFIEQgnK5DFVVwTnHbrc72De1Rur1OgqFAiilMAwDQRD8laQP0el0YJomXNcF5xyMMRSLRXQ6Hdi2neibENntdlAUJdXp/5imibe3t1vnnaLX6+H5+TkRe3x8RLfbBaUUg8Egjl9Ufn3fR7vdhmVZt8l0D8/zwDlPxMIwhCzLWCwWcUzXdYzHY4RhiHK5jO12C+BMESEETNNEpVLBcrm8Yfr/MZ1O0e/3U/HtdgvGGAghqNfrKJVK8H0fQghUKpW436cirutClmUwxmBZFiRJSr3uWxBFEZrNJgzDwGq1SrWHYYjVaoUoirBcLtFutzEcDuP2oyJCCBiGgVqthtfX1zg+GAxSU+BWLBYLFAqFk2s0iiIwxqDreiJ+VGSxWIAQgul0Gsd83wel9GgJ/CphGGK9XqPRaGC9Xl/07MmppWkadF2HEAKWZYFSevC1f8Z8Pr+ojPu+D0IIHMc5+5mTIp7n4eHhAcViEZTSxBT7QNd13N/fo9VqHd2BdV2H67qJWBRF8XHo0Oi7rnuRzFlV69hojkYj9Ho9AEC/30/N7SAIYFkWZrNZqm00GsE0TaxWK1BKj8q0Wq1zUrz+GO84Diil8VvgnCdGXQgBSik6nQ4qlUpiLwDeN7vNZgPHcSDLMlRVvTYVAF8QYYxhMpkcbX96eoKmaQDeR3+/aADv669araLVasG2bXiel5p+l3C1SLPZjDfHj1PyPt1uN55Otm3HUh9wziHLcvxf0zTM5/Nr07leZDqdghCC0WgEQkhqNBuNRlwcXl5eDu7akiRhMBhgNpuBEHJxyd3nS1fd5XIJTdPgeV6qTVGUeF2Mx2MwxlJ9giBAv98HY+yqsr7Pt93ZbdtGqVSCqqqo1Wrffsv81o8Pm80mPvJ/Zdqcw+/8ivIv8wdL3arN8Q1vAgAAAABJRU5ErkJggg=="
            },
            {
                'Type': "textCircle",
                'Image': "data:image/png;base64,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"
            },
            {
                'Type': "textButton",
                'Image': "data:image/png;base64,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"
            }
        ]
    ];


    var g_oChartPresets = {};
    g_oChartPresets[Asc.c_oAscChartTypeSettings.areaNormal] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, null],
                        [0, 2, 2],
                        [0, 2, 2], 0, 0, 1, 9575
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                            ["alpha", 36000]
                        ]],
                        [100000, [3, 8, 3, ["lumMod", 95000],
                            ["lumOff", 5000],
                            ["alpha", 42000]
                        ]]
                    ], 10, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [0, true], 0, 0, 2, [0, [3, 0, 1, ["lumMod", 75000]]],
                    [100000, [3, 0, 0]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 22, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                            ["alpha", 36000]
                        ]],
                        [100000, [3, 8, 3, ["lumMod", 95000],
                            ["lumOff", 5000],
                            ["alpha", 42000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, 188.7, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [10, true, false, [3, null, [3, 0, 1, ["lumMod", 50000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 2, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.areaStacked] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, null],
                        [0, 2, 2],
                        [0, 2, 2], 0, 0, 1, 9575
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                            ["alpha", 36000]
                        ]],
                        [100000, [3, 8, 3, ["lumMod", 95000],
                            ["lumOff", 5000],
                            ["alpha", 42000]
                        ]]
                    ], 10, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [0, true], 0, 0, 2, [0, [3, 0, 1, ["lumMod", 75000]]],
                    [100000, [3, 0, 0]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 22, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                            ["alpha", 36000]
                        ]],
                        [100000, [3, 8, 3, ["lumMod", 95000],
                            ["lumOff", 5000],
                            ["alpha", 42000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, 188.7, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [10, true, false, [3, null, [3, 0, 1, ["lumMod", 50000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 1, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.areaStackedPer] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, null],
                        [0, 2, 2],
                        [0, 2, 2], 0, 0, 1, 9575
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                            ["alpha", 36000]
                        ]],
                        [100000, [3, 8, 3, ["lumMod", 95000],
                            ["lumOff", 5000],
                            ["alpha", 42000]
                        ]]
                    ], 10, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [0, true], 0, 0, 2, [0, [3, 0, 1, ["lumMod", 75000]]],
                    [100000, [3, 0, 0]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 22, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                            ["alpha", 36000]
                        ]],
                        [100000, [3, 8, 3, ["lumMod", 95000],
                            ["lumOff", 5000],
                            ["alpha", 42000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, 188.7, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [10, true, false, [3, null, [3, 0, 1, ["lumMod", 50000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.barNormal] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 219, -27, null, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, 7, null, false, false, null, false, false, false, true],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -5400000, 1, 0, true, 0, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 7, null, false, false, false, false, false, false, true
            ], 444, -90, null, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 24, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 164, -22, null, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, [0, [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                        ["alpha", 36000]
                    ]],
                    [100000, [3, 8, 3, ["lumMod", 95000],
                        ["lumOff", 5000],
                        ["alpha", 42000]
                    ]]
                ], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]], 0, 2, 2, true],
            [0, 0, 5, null, false, false, null, false, false, false, true],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 5, null, false, false, false, false, false, false, true
            ], 65, null, null, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 100, -24, null, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 100, -24, null, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 267, -43, null, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 100, -24, null, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]],
                        [100000, [3, 15, 2, ["lumMod", 5000],
                            ["lumOff", 95000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 4, [0, [3, 0, 0]],
                    [51000, [3, 0, 1, ["alpha", 75000]]],
                    [75000, [3, 0, 2, ["lumMod", 60000],
                        ["lumOff", 40000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 20000],
                        ["lumOff", 80000],
                        ["alpha", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 355, -70, null, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [2, null],
                [
                    [3, null, [3, 0, 0]], null, [3, 800000], 0, 0, 0, 0, 1, 25400
                ]
            ], 0, 164, -35, null, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 199, null, null, 0
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [2, null],
                [
                    [3, null, [3, 0, 0]], null, [3, 800000], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 315, -40, null, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 15875
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 178.5, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 80, 25, null, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 100, -24, null, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.barStacked] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, false, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], 79, 100, null, 2
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [0, null], 0, 0, null, null, null, null
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 24, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, [0, [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                        ["alpha", 36000]
                    ]],
                    [100000, [3, 8, 3, ["lumMod", 95000],
                        ["lumOff", 5000],
                        ["alpha", 42000]
                    ]]
                ], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]], 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], 150, 100, null, 2
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, 100, null, 2
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null],
                        [0, 2, 2],
                        [0, 2, 2], 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 15, 2, ["lumMod", 5000],
                            ["lumOff", 95000]
                        ]],
                        [100000, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 178.5, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 50, 100, null, 2
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.barStackedPer] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, false, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], 79, 100, null, 1
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [0, null], 0, 0, null, null, null, null
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 24, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, [0, [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                        ["alpha", 36000]
                    ]],
                    [100000, [3, 8, 3, ["lumMod", 95000],
                        ["lumOff", 5000],
                        ["alpha", 42000]
                    ]]
                ], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]], 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], 150, 100, null, 1
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, 100, null, 1
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null],
                        [0, 2, 2],
                        [0, 2, 2], 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 15, 2, ["lumMod", 5000],
                            ["lumOff", 95000]
                        ]],
                        [100000, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 178.5, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 50, 100, null, 1
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.barNormal3d] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 20, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 160, null, 0, 0, [100, null, null, false, 10, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, null, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 75000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 65, null, null, 0, [60, null, 100, false, 0, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, null, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 8, 1, ["tint", 75000]]], null, [1, null], 0, 0, 0, 0, 1, 6350
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, false, false, [3, null, [3, 12, 0]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, 0, 0, 3, 2, true],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, 224.4, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 50000]]], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 76.5, [3, 0, 0]],
                    [
                        [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], 84, null, 53, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, 68.85, [3, 7, 1, ["lumMod", 75000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 76.5, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 75000]]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, 68.85, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, 0, 2, [50000, [3, 0, 0]],
                    [100000, [3, 0, 1, ["alpha", 0]]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, 0, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 50000],
                        ["lumOff", 50000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.barStacked3d] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [0, null], 0, 0, null, null, null, null
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 20, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [8, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], 79, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 50000],
                        ["lumOff", 50000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.barStackedPer3d] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [0, null], 0, 0, null, null, null, null
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 20, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [8, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], 79, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 50000],
                        ["lumOff", 50000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.barNormal3dPerspective] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 3, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 20, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 160, null, 0, 3, [100, null, null, false, 10, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, null, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 75000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 65, null, null, 3, [60, null, 100, false, 0, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, null, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, null, null, 3, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 3, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 8, 1, ["tint", 75000]]], null, [1, null], 0, 0, 0, 0, 1, 6350
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, false, false, [3, null, [3, 12, 0]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, 0, 0, 3, 2, true],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, 224.4, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 50000]]], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 76.5, [3, 0, 0]],
                    [
                        [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], 84, null, 53, 3, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, 68.85, [3, 7, 1, ["lumMod", 75000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 76.5, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 75000]]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 3, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, 68.85, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null],
                        [0, 2, 2],
                        [0, 2, 2], 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, 0, 2, [50000, [3, 0, 0]],
                    [100000, [3, 0, 1, ["alpha", 0]]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, 0, 3, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 50000],
                        ["lumOff", 50000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 3, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 3, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ]
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.lineNormal] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 28575
            ]], 0, null, null, null, 2, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, [0, [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                        ["alpha", 36000]
                    ]],
                    [100000, [3, 8, 3, ["lumMod", 95000],
                        ["lumOff", 5000],
                        ["alpha", 42000]
                    ]]
                ], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]], 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 31750
            ]],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], null, null, null, 2, 0, 0, 0, 0, [null, 0, null],
            [17, [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 95000]]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, 0, 1, 1, 22225
            ]], 0, null, null, null, 2, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 31750
            ]], 0, null, null, null, 2, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, 137.7, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, 130.05, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 137.7, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 22225
            ]], 0, null, null, null, 2, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 34925
            ]], 0, null, null, null, 2, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14.5, false, false, [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]],
                [100000, [3, 8, 2, ["lumMod", 85000],
                    ["lumOff", 15000]
                ]]
            ], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [10, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [0, [
                [3, null, [3, 0, 2, ["shade", 95000],
                    ["satMod", 105000]
                ]], null, [1, null], 0, 0, 0, 1, 1, 19050
            ]],
            [
                [9, true, false, [3, null, [3, 0, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], null, null, null, 2, 0, 0, 0, 0, [null, 0, null],
            [17, [
                [3, null, [3, 12, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 38100
            ]], 0, null, null, null, 2, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, 1, null, 22225
            ]], 0, null, null, null, 2, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 22225
            ]], 0, null, null, null, 2, 0, 0, 0, 0, [null, 0, null],
            [6, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, null, null, 9525
                ]
            ], 2]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 28575
            ]], 0, null, null, null, 2, 0, 0, 0, 0, [null, 0, null],
            [5, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, 9525
                ]
            ], 0]
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.lineStacked] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 28575
            ]], 0, null, null, null, 1, 0, 0, 0, 0, 0, [null, 0, 4], 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false, null, 0
            ],
            [0, 0, [0, [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                        ["alpha", 36000]
                    ]],
                    [100000, [3, 8, 3, ["lumMod", 95000],
                        ["lumOff", 5000],
                        ["alpha", 42000]
                    ]]
                ], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]], 0, 2, 2, true, 0, 0],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 31750
            ]],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], null, null, null, 1, 0, 0, 0, 0, [null, 0, null],
            [17, [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 95000]]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, 0, 1, 1, 22225
            ]], 0, null, null, null, 1, 0, 0, 0, 0, 0, [null, 0, 4], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 31750
            ]], 0, null, null, null, 1, 0, 0, 0, 0, 0, [null, 0, 4], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, 137.7, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, 130.05, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 137.7, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 22225
            ]], 0, null, null, null, 1, 0, 0, 0, 0, 0, [null, 0, 4], 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 34925
            ]], 0, null, null, null, 1, 0, 0, 0, 0, 0, [null, 0, 4], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14.5, false, false, [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]],
                [100000, [3, 8, 2, ["lumMod", 85000],
                    ["lumOff", 15000]
                ]]
            ], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [10, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false, null, 0
            ],
            [0, 0, 0, 0, 2, 2, true, 0, 0],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [0, [
                [3, null, [3, 0, 2, ["shade", 95000],
                    ["satMod", 105000]
                ]], null, [1, null], 0, 0, 0, 1, 1, 19050
            ]],
            [
                [9, true, false, [3, null, [3, 0, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], null, null, null, 1, 0, 0, 0, 0, [null, 0, null],
            [17, [
                [3, null, [3, 12, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 38100
            ]], 0, null, null, null, 1, 0, 0, 0, 0, 0, [null, 0, 4], 0, 0
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, 1, null, 22225
            ]], 0, null, null, null, 1, 0, 0, 0, 0, 0, [null, 0, 4], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 22225
            ]], 0, null, null, null, 1, 0, 0, 0, 0, [null, 0, null],
            [6, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, null, null, 9525
                ]
            ], 2], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 28575
            ]], 0, null, null, null, 1, 0, 0, 0, 0, [null, 0, null],
            [5, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, 9525
                ]
            ], 0], 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.lineStackedPer] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 28575
            ]], 0, null, null, null, 0, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, [0, [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                        ["alpha", 36000]
                    ]],
                    [100000, [3, 8, 3, ["lumMod", 95000],
                        ["lumOff", 5000],
                        ["alpha", 42000]
                    ]]
                ], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]], 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 31750
            ]],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], null, null, null, 0, 0, 0, 0, 0, [null, 0, null],
            [17, [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 95000]]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, 0, 1, 1, 22225
            ]], 0, null, null, null, 0, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 31750
            ]], 0, null, null, null, 0, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, 137.7, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, 130.05, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 137.7, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 22225
            ]], 0, null, null, null, 0, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 34925
            ]], 0, null, null, null, 0, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14.5, false, false, [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]],
                [100000, [3, 8, 2, ["lumMod", 85000],
                    ["lumOff", 15000]
                ]]
            ], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [10, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [0, [
                [3, null, [3, 0, 2, ["shade", 95000],
                    ["satMod", 105000]
                ]], null, [1, null], 0, 0, 0, 1, 1, 19050
            ]],
            [
                [9, true, false, [3, null, [3, 0, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], null, null, null, 0, 0, 0, 0, 0, [null, 0, null],
            [17, [
                [3, null, [3, 12, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 38100
            ]], 0, null, null, null, 0, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, 1, null, 22225
            ]], 0, null, null, null, 0, 0, 0, 0, 0, 0, [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 22225
            ]], 0, null, null, null, 0, 0, 0, 0, 0, [null, 0, null],
            [6, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, null, null, 9525
                ]
            ], 2]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 28575
            ]], 0, null, null, null, 0, 0, 0, 0, 0, [null, 0, null],
            [5, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, 9525
                ]
            ], 0]
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.line3d] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, 2, [null, null, null, false, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [null, 0, null],
            [null, 0, 4]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [2, null], null, [1, null], 0, 0, 0, 0, 1, 25400
                ]
            ], 0, null, null, null, 2, [null, null, null, false, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [null, 0, null],
            [null, 0, 4]
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 50000],
                            ["lumOff", 50000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 50000],
                        ["lumOff", 50000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, 25400
                ]
            ], 0, null, null, null, 2, [null, null, null, false, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [null, 0, null],
            [null, 0, 4]
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.hBarNormal] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 182, null, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 25, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 227, -48, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                            ["alpha", 36000]
                        ]],
                        [100000, [3, 8, 3, ["lumMod", 95000],
                            ["lumOff", 5000],
                            ["alpha", 42000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 5, null, false, false, null, false, false, false, true],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 5, null, false, false, false, false, false, false, true
            ], 65, null, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 100, null, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 100, null, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 3, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 247, null, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 115, -20, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null],
                        [0, 2, 2],
                        [0, 2, 2], 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]],
                        [99000, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [10800000, true], 0, [], 4, [0, [3, 0, 0]],
                    [51000, [3, 0, 1, ["alpha", 75000]]],
                    [75000, [3, 0, 2, ["lumMod", 60000],
                        ["lumOff", 40000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 20000],
                        ["lumOff", 80000],
                        ["alpha", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 326, -58, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 3, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [2, null],
                [
                    [3, null, [3, 0, 0]], null, [3, 800000], 0, 0, 0, 0, 1, 25400
                ]
            ], 0, 227, -48, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 269, null, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [10800000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [10800000, false], 0, 0, 2, [0, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [2, null],
                [
                    [3, null, [3, 0, 0]], null, [3, 800000], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 182, -50, null, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 115, -20, null, 0, 0, 0, 0, 0, 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.hBarStacked] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, false, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], 79, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [0, null], 0, 0, null, null, null, null
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 24, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, [0, [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                        ["alpha", 36000]
                    ]],
                    [100000, [3, 8, 3, ["lumMod", 95000],
                        ["lumOff", 5000],
                        ["alpha", 42000]
                    ]]
                ], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]], 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], 150, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null],
                        [0, 2, 2],
                        [0, 2, 2], 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 15, 2, ["lumMod", 5000],
                            ["lumOff", 95000]
                        ]],
                        [100000, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 178.5, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 50, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 2, 0, 0, 0, 0, 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.hBarStackedPer] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, false, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], 79, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [0, null], 0, 0, null, null, null, null
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 24, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, [0, [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                        ["alpha", 36000]
                    ]],
                    [100000, [3, 8, 3, ["lumMod", 95000],
                        ["lumOff", 5000],
                        ["alpha", 42000]
                    ]]
                ], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]], 0, 2, 2, true],
            [0, 0, 3, null, false, false, null, false, false, false, true],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, false, false, false, false, true
            ], 150, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null],
                        [0, 2, 2],
                        [0, 2, 2], 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 15, 2, ["lumMod", 5000],
                            ["lumOff", 95000]
                        ]],
                        [100000, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 178.5, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 50, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, 100, null, 1, 0, 0, 0, 0, 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.hBarNormal3d] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 20, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 160, null, 0, 0, [100, null, null, false, 10, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, null, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 216.75, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 75000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 65, null, null, 0, [60, null, 100, false, 0, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, null, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 8, 1, ["tint", 75000]]], null, [1, null], 0, 0, 0, 0, 1, 6350
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, false, false, [3, null, [3, 12, 0]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [0, 0, 0, 0, 3, 2, true],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, 224.4, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 50000]]], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 76.5, [3, 0, 0]],
                    [
                        [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], 84, null, 53, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, 68.85, [3, 7, 1, ["lumMod", 75000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, 76.5, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 75000]]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [3, 68.85, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [10800000, true], 0, [], 2, [50000, [3, 0, 0]],
                    [100000, [3, 0, 1, ["alpha", 0]]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, 0, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 50000],
                        ["lumOff", 50000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 0, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.hBarStacked3d] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [0, null], 0, 0, null, null, null, null
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 20, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [8, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], 79, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 50000],
                        ["lumOff", 50000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 2, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.hBarStackedPer3d] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [0, null], 0, 0, null, null, null, null
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [5, null, 20, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, 0, 0, 2, 2, true],
            [0, 0, null, null, false, false, null, false, false, false, true],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [8, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, false, false, false, false, true
            ], 79, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 50000],
                        ["lumOff", 50000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 150, null, null, 1, [100, null, null, true, 15, 20],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.stock] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 15, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]],
            [
                [
                    [3, null, [3, 8, 2, ["lumMod", 75000],
                        ["lumOff", 25000]
                    ]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 150, [
                    [3, null, [3, 12, 0]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ]
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [0, null], 0, 0, null, null, null, null
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, null], 0, 0, 0, 0, 1, 15875
            ]],
            [
                [
                    [3, null, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 150, [
                    [3, null, [3, 12, 0]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 50000],
                            ["lumOff", 50000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ]
            ]
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 19050
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 2, ["lumMod", 75000],
                            ["alpha", 36000]
                        ]],
                        [100000, [3, 8, 3, ["lumMod", 95000],
                            ["lumOff", 5000],
                            ["alpha", 42000]
                        ]]
                    ], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, null], 0, 0, 0, 0, 1, 15875
            ]],
            [
                [
                    [3, null, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 150, [
                    [3, null, [3, 12, 0]],
                    [
                        [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ]
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 15, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [0, null], 0, 0, null, null, null, 9525
            ]],
            [
                [
                    [3, null, [3, 8, 2, ["lumMod", 75000],
                        ["lumOff", 25000]
                    ]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ], 150, [
                    [3, null, [3, 12, 0]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 50000],
                            ["lumOff", 50000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ]
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [0, null], 0, 0, null, null, null, 9525
            ]],
            [
                [
                    [3, null, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ], 150, [
                    [3, null, [3, 12, 0]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ]
            ]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 8, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, null], 0, 0, 0, 0, 1, 12700
            ]],
            [
                [
                    [3, null, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ], 150, [
                    [3, null, [3, 12, 0]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ]
            ]
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]],
            [
                [
                    [4, null, 0, [], 0, 2, [0, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]],
                        [100000, [3, 8, 2, ["lumMod", 95000],
                            ["lumOff", 5000]
                        ]]
                    ],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ], 150, [
                    [4, null, 0, [], 0, 2, [0, [3, 12, 0]],
                        [100000, [3, 12, 1, ["lumMod", 85000]]]
                    ],
                    [
                        [3, null, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ]
            ]
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9575
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, null], 0, 0, 0, 2, 1, 25400
            ]],
            [
                [
                    [3, null, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ], 150, [
                    [3, null, [3, 12, 0]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ]
            ]
        ],
        [2, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [15, true, false, [3, null, [3, 12, 0]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [8, false, false, [3, null, [3, 12, 0]], true, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 12, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0, 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 15875
            ]],
            [
                [
                    [5, null, 20, [3, 12, 0],
                        [3, 0, 0]
                    ],
                    [
                        [3, 127.5, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 150, [
                    [5, null, 20, [3, 0, 0],
                        [3, 12, 0]
                    ],
                    [
                        [3, 127.5, [3, 12, 1, ["lumMod", 85000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ]
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], false, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 35000],
                            ["lumOff", 65000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, null], 0, 0, 0, 0, 1, 25400
            ]],
            [
                [
                    [3, null, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [0, null], 0, 0, null, null, null, 28575
                    ]
                ], 150, [
                    [3, null, [3, 12, 0]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 50000],
                            ["lumOff", 50000]
                        ]], null, [0, null], 0, 0, null, null, null, 28575
                    ]
                ]
            ]
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 0, 0, 3, 2, false, null, 0
            ],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 0, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [null, 0, 4],
            [0, [
                [3, null, [3, 15, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, null], 0, 0, 0, 0, 1, 9525
            ]],
            [
                [
                    [3, null, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ], 150, [
                    [3, null, [3, 12, 0]],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [0, null], 0, 0, null, null, null, 9525
                    ]
                ]
            ]
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.pie] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 12, 0]], null, [0, null], 0, 0, null, null, null, 19050
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [5, null, 22, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [3, null, [3, 12, 0]], null, [0, null], 0, 0, null, null, null, 19050
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, 3, null, false, false, true, false, true, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [10, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [5, null, 36, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ],
                        [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]
                    ],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, true, false, true, false, false
            ], null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [5, null, 8, [3, 12, 0],
                    [3, 8, 2, ["lumMod", 10000],
                        ["lumOff", 90000]
                    ]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 127.5, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 0, 0]],
                    [100000, [3, 0, 2, ["lumMod", 60000],
                        ["lumOff", 40000]
                    ]]
                ],
                [
                    [3, null, [3, 12, 0]], null, [0, null], 0, 0, null, null, null, 19050
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, 5, null, false, false, true, false, true, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 5, null, false, false, true, false, true, false, false
            ], null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, 7, null, false, true, true, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [10, true, false, [3, null, [3, 0, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 7, null, false, true, null, false, false, false, false
            ], null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [15, true, false, [3, null, [3, 12, 0]], true, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, 5, null, false, true, true, false, true, false, false],
            [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, 19050
                ]
            ],
            [
                [9, true, false, [3, null, [3, 0, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 5, null, false, true, true, false, true, false, false
            ], null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [5, null, 8, [3, 12, 1, ["lumMod", 95000]],
                    [3, 12, 0]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 198.9, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, 5, null, false, false, true, false, true, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 5, null, false, false, true, false, true, false, false
            ], null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.doughnut] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 12, 0]], null, [0, null], 0, 0, null, null, null, 19050
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [5, null, 22, [3, 0, 0],
                    [3, 0, 2, ["lumMod", 20000],
                        ["lumOff", 80000]
                    ]
                ],
                [
                    [3, null, [3, 12, 0]], null, [0, null], 0, 0, null, null, null, 19050
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, true, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [10, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [5, null, 36, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ],
                        [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]
                    ],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, true, false, true, false, false
            ], null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [5, null, 8, [3, 12, 0],
                    [3, 8, 2, ["lumMod", 10000],
                        ["lumOff", 90000]
                    ]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 127.5, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 0, 0]],
                    [100000, [3, 0, 2, ["lumMod", 60000],
                        ["lumOff", 40000]
                    ]]
                ],
                [
                    [3, null, [3, 12, 0]], null, [0, null], 0, 0, null, null, null, 19050
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 2
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, true, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, true, false, true, false, false
            ], null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [15, true, false, [3, null, [3, 12, 0]], true, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, true, true, false, true, false, false],
            [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, 19050
                ]
            ],
            [
                [9, true, false, [3, null, [3, 0, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, true, true, false, true, false, false
            ], null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        [2, [
                [5, null, 8, [3, 12, 1, ["lumMod", 95000]],
                    [3, 12, 0]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 198.9, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, true, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], null, null, false, false, true, false, true, false, false
            ], null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.pie3d] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 12, 0]], null, [0, null], 0, 0, null, null, null, 25400
                ]
            ], 0, null, null, null, null, [100, null, null, true, 30, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, 5, null, false, true, true, false, false, false, false],
            [
                [3, 229.5, [3, 0, 0]],
                [
                    [3, null, [3, 0, 1, ["lumMod", 75000]]], null, [0, null], 0, 0, null, null, null, 19050
                ]
            ],
            [
                [10, false, false, [3, null, [3, 0, 0]], null, [1, true, 0, 1, 0, true, 0, 1]],
                [
                    [3, 229.5, [3, 12, 0]],
                    [
                        [3, null, [3, 0, 0]], null, [1, null], 0, 0, 0, 0, 1, 12700
                    ]
                ], 5, null, false, true, null, false, false, false, false
            ], null, null, null, null, [100, null, null, true, 50, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 3, [0, [3, 12, 0]],
                    [39000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 75000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 25000],
                        ["lumOff", 75000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                ["lumOff", 25000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 99.45, [3, 12, 1, ["lumMod", 95000]]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, 3, null, false, false, true, false, true, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [10, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [5, null, 36, [3, 8, 2, ["lumMod", 75000],
                            ["lumOff", 25000]
                        ],
                        [3, 8, 2, ["lumMod", 65000],
                            ["lumOff", 35000]
                        ]
                    ],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3, null, false, false, true, false, true, false, false
            ], null, null, null, null, [100, null, null, true, 50, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, null, [100, null, null, true, 30, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, null, [100, null, null, true, 30, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ],
        [2, [
                [5, null, 8, [3, 12, 0],
                    [3, 8, 2, ["lumMod", 10000],
                        ["lumOff", 90000]
                    ]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 127.5, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 3
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 0, 0]],
                    [100000, [3, 0, 2, ["lumMod", 60000],
                        ["lumOff", 40000]
                    ]]
                ],
                [
                    [3, null, [3, 12, 0]], null, [0, null], 0, 0, null, null, null, 50800
                ]
            ], 0, null, null, null, null, [100, null, null, true, 30, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, null, [100, null, null, true, 30, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, 7, null, false, true, true, false, false, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [10, true, false, [3, null, [3, 0, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 7, null, false, true, null, false, false, false, false
            ], null, null, null, null, [100, null, null, true, 30, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ],
        [2, [
                [5, null, 8, [3, 12, 1, ["lumMod", 95000]],
                    [3, 12, 0]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [18, true, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [3, 198.9, [3, 12, 0]],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, 5, null, false, false, true, false, true, false, false],
            [
                [3, null, [3, 0, 0]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [
                [9, true, false, [3, null, [3, 12, 0]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 5, null, false, false, true, false, true, false, false
            ], null, null, null, null, [100, null, null, true, 50, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]],
            [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, 0, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 4
            ],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, 0, [0, 0, null, null, false, false, true, false, false, false, false],
            [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, null, null, null, null, [100, 100, null, true, 30, 0],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ],
            [
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ], 0
            ], 0, 0, 0, 0
        ]
    ];
    g_oChartPresets[Asc.c_oAscChartTypeSettings.scatter] = [
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [5, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, 9525
                ]
            ], 0], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], true, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [6, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, null, null, 9525
                ]
            ], 2], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 16, 0]], null, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 16, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 16, 2, ["lumMod", 40000],
                            ["lumOff", 60000]
                        ]], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 16, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [5, [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, null, null, 9525
                ]
            ], 0], 0, 0
        ],
        [2, [
                [3, null, [3, 6, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [20, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 5000],
                        ["lumOff", 95000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, 0, 0, 0, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [6, [
                [2, null],
                [
                    [3, 178.5, [3, 0, 1, ["lumMod", 75000]]], null, [1, null], 0, 0, 0, 0, 0, 34925
                ]
            ], 0], 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [43000, [3, 12, 0]],
                    [100000, [3, 12, 1, ["lumMod", 95000]]]
                ],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, false, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], null, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                    ["lumOff", 50000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [0, null], 0, 0, null, null, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [4, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0], 0, 0
        ],
        [2, [
                [3, null, [3, 8, 2, ["lumMod", 75000],
                    ["lumOff", 25000]
                ]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, true, false, [3, null, [3, 12, 1, ["lumMod", 85000]]], false, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 12, 1, ["lumMod", 50000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, 191.25, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [0, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [3, [
                [3, null, [3, 0, 2, ["lumMod", 60000],
                    ["lumOff", 40000]
                ]],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [14, false, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [4, null, [5400000, false], 0, 0, 2, [0, [3, 12, 1, ["alpha", 0]]],
                    [100000, [3, 12, 1, ["lumMod", 95000]]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 8, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [1, null], 0, 0, null, 1, null, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], 10, [1, null], 0, 0, 0, 0, 1, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [5, [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["lumMod", 110000],
                        ["satMod", 105000],
                        ["tint", 67000]
                    ]],
                    [50000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 103000],
                        ["tint", 73000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 105000],
                        ["satMod", 109000],
                        ["tint", 81000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 1, ["shade", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ], 0], 0, 0
        ],
        [2, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [15, true, false, [3, null, [3, 12, 0]], true, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 12, 0]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [2, null], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, 63.75, [3, 12, 0]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [6, [
                [3, null, [3, 0, 0]],
                [
                    [3, null, [3, 12, 0]], null, [1, null], 0, 0, null, null, null, 22225
                ]
            ], 0], 0, 0
        ],
        [2, [
                [4, null, 0, [],
                    [], 2, [0, [3, 8, 2, ["lumMod", 65000],
                        ["lumOff", 35000]
                    ]],
                    [100000, [3, 8, 2, ["lumMod", 85000],
                        ["lumOff", 15000]
                    ]]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 12, 1, ["lumMod", 95000]]], null, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 12, 1, ["lumMod", 75000]]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 12, 1, ["lumMod", 50000]]], null, [0, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, 25.5, [3, 12, 1, ["lumMod", 95000]]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [6, [
                [4, null, [5400000, false], 0, [], 3, [0, [3, 0, 3, ["satMod", 103000],
                        ["lumMod", 102000],
                        ["tint", 94000]
                    ]],
                    [50000, [3, 0, 3, ["satMod", 110000],
                        ["lumMod", 100000],
                        ["shade", 100000]
                    ]],
                    [100000, [3, 0, 3, ["lumMod", 99000],
                        ["satMod", 120000],
                        ["shade", 78000]
                    ]]
                ],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, 1, null, 9525
                ]
            ], 0], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                ["lumOff", 35000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 15, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, null, [3, 15, 2, ["lumMod", 25000],
                            ["lumOff", 75000]
                        ]], null, [0, null], 0, 0, null, null, null, null
                    ]
                ],
                [0, [
                    [3, null, [3, 15, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [6, [
                [3, null, [3, 12, 0]],
                [
                    [3, 153, [3, 0, 0]], null, [0, null], 0, 0, null, null, null, 38100
                ]
            ], 0], 0, 0
        ],
        [2, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]
            ],
            [null, null, null, 0, null, [null, null, null, null, null, null, null, null]],
            [
                [2, null],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ],
            [16, true, false, [3, null, [3, 8, 2, ["lumMod", 50000],
                ["lumOff", 50000]
            ]], false, [1, true, 0, 1, null, true, 1, 1]], 0, [
                [5, null, 20, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ],
                    [3, 12, 0]
                ],
                [
                    [2, null], null, [0, null], 0, 0, null, null, null, null
                ]
            ], 0, 0, [
                [9, false, false, [3, null, [3, 8, 2, ["lumMod", 65000],
                    ["lumOff", 35000]
                ]], null, [1, true, -60000000, 1, null, true, 1, 1]],
                [
                    [2, null],
                    [
                        [3, 137.7, [3, 8, 2, ["lumMod", 15000],
                            ["lumOff", 85000]
                        ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                    ]
                ],
                [0, [
                    [3, null, [3, 8, 2, ["lumMod", 15000],
                        ["lumOff", 85000]
                    ]], null, [1, null], 0, 0, 0, 0, 1, 9525
                ]], 0, 2, 2, false, 1, 0
            ],
            [0, 0, null, null, false, false, null, false, false, false, false],
            [0, [
                [2, null], null, [1, null], 0, 0, null, 1, null, 25400
            ]], 0, null, null, null, null, 0, 0, 0, 0, 0, [6, [
                [3, null, [3, 12, 0]],
                [
                    [3, null, [3, 0, 0]], null, [1, null], 0, 0, null, null, null, 15875
                ]
            ], 2], 0, 0
        ]
    ];

    //----------------------------------------------------------export----------------------------------------------------
    window['AscCommon'] = window['AscCommon'] || {};
    window['AscCommon'].g_oAutoShapesGroups = g_oAutoShapesGroups;
    window['AscCommon'].g_oAutoShapesTypes = g_oAutoShapesTypes;
    window['AscCommon'].g_oStandartColors = g_oStandartColors;
    window['AscCommon'].GetDefaultColorModsIndex = GetDefaultColorModsIndex;
    window['AscCommon'].GetDefaultMods = GetDefaultMods;
    window['AscCommon'].g_oUserColorScheme = g_oUserColorScheme;
    window['AscCommon'].g_oUserTexturePresets = g_oUserTexturePresets;
    window['AscCommon'].g_sWordPlaceholderImage = g_sWordPlaceholderImage;
    window['AscCommon'].g_oPresetTxWarpGroups = g_oPresetTxWarpGroups;
    window['AscCommon'].g_PresetTxWarpTypes = g_PresetTxWarpTypes;
    window['AscCommon'].g_oChartPresets = g_oChartPresets;
})(window);