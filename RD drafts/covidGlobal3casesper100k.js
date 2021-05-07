{
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",

  "description": "Covid-19 data, from ECDC",

    "title": {
    "text": "Covid-19 cases, selected countries",
    "subtitle":"Weekly cases rate, per 100k population. Source: ECDC",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/observatory/main/covidGlobalCases.csv"
  },

  "transform": [
    {
      "filter": {
        "field": "country",
        "oneOf": ["United Kingdom", "France", "Germany", "India", "America (total)"]
      }
    },

    {
      "filter": {
        "field": "indicator",
        "oneOf": ["cases"]
      }
    }
  ],
  "encoding": {
    "x": {
      "field": "year_week",
      "type": "ordinal",
      "axis": {
        "title": "Date",
        "grid": false,
        "tickCount": 7,
        "labelOverlap": "greedy"
      },
      "scale": {}
    },

    "y": {
      "field": "rate_14_day",
      "type": "quantitative",
      "axis": {"title": "Cases", "grid": false}
    },

    "color": {
      "field": "country",
      "type": "nominal",
      "scale": {"scheme": "set2"},
      "title": ""
    }
  },
  
  "config": {"background": "#FcFdFd"},
  "height": 300,
  "width": 800,
  "mark": {"type": "line", "interpolate": "monotone", "color": "red"}
}