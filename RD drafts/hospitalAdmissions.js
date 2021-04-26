{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Hospital admissions",

"title": {
    "text": "Hospital admissions",
    "subtitle":"New asmissions, rolling weekly average rate, per 100k population",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=nation&metric=newAdmissionsRollingRate&format=csv",
    "format": {"type": "csv"}
  },

  "height": 130,
  
  "width": 150,
  
  "mark": {"type": "bar", "color":"orange"},
  
  "transform": [
     {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "feb", "date": 1},
          {"year": 2022, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  
  "encoding": {
    
    "x": {"field": "date", "type": "temporal", "title": ""},
    
    "y": {
      "field": "newAdmissionsRollingRate",
      "type": "quantitative",
      "title": null
    
    },

    "facet": {
      "field": "areaName",
      "type": "nominal",
      "columns": 2,
      "title": null
    },
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "newAdmissions","type": "quantitative","title": "New Admissions","format": ",.0f"}
    ]

    
  },
  "xxresolve": {"scale": {"y": "independent"}}
}