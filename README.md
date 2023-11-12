# 🌿Leaflet-Challenge
This challenge is divided into two parts Leaflet-Part-1 and Leaflet-Part-2.

- Part 1: Create the Earthquake Visualisation

- Part 2: Gather and Plot Tectonic Plate Boundaries

This Challenge uses both HTML and JavaScript. 

## Table of Contents

1. [Part 1: Create the Earthquake Visualisation](#1-part-1-create-the-earthquake-visualisation)
   - 1.1. [Steps to Follow](#11-steps-to-follow)
   - 1.2. [Result](#12-result)
2. [Part 2: Gather and Plot Tectonic Plate Boundaries](#2-part-2-gather-and-plot-tectonic-plate-boundaries)
   - 2.1. [Steps to Follow](#21-steps-to-follow)
   - 2.2. [Result](#22-result)


## 1️⃣Part 1: Create the Earthquake Visualisation

### 🪜Steps to follow: 

1. Get the dataset.

- The USGS provides earthquake data in several formats, updated every 5 minutes. Visit the [USGS GeoJSON FeedLinks](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) to an external site page and choose a dataset to visualise. Select "All Earthquakes from the Past 7 or 30 Days"

2. Pull in the data for the visualisation

- Clicking a dataset (such as "All Earthquakes from the Past 7 Days") will give a JSON representation of that data. Using the URL of this JSON, pull in the data for the visualisation.

3. Import and visualise the data

- Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

  - The data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by colour. 
  - Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in colour.

- Include popups that provide additional information about the earthquake when its associated marker is clicked.

- Create a legend that will provide context for your map data.

### ▶️Result
🖥️[Leaflet-Part-1 CODE](https://github.com/athirareji321/Leaflet-Challenge/tree/main/Leaflet-Part-1)

![Output Image 1](https://github.com/athirareji321/Leaflet-Challenge/blob/main/Outputs/Leaflet-Part-1.png)

## 2️⃣Part 2: Gather and Plot Tectonic Plate Boundaries
Plot a second dataset on the map to illustrate the relationship between tectonic plates and seismic activity. Pull in this dataset and visualise it alongside your original data. Data on tectonic plates can be found at [Tectonic Plate Boundaries](https://github.com/fraxen/tectonicplates)

### 🪜Steps to follow: 

1. Plot the tectonic plates dataset on the map in addition to the earthquakes.
2. Add other base maps to choose from.
3. Put each dataset into separate overlays that can be turned on and off independently.
4. Add layer controls to the map.

### ▶️Result
🖥️[Leaflet-Part-2 CODE](https://github.com/athirareji321/Leaflet-Challenge/tree/main/Leaflet-Part-2)

![Output Image 1](https://github.com/athirareji321/Leaflet-Challenge/blob/main/Outputs/Leaflet-Part-2.png)
