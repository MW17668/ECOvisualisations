<div align="left"><img src="https://raw.githubusercontent.com/EconomicsObservatory/economicsobservatory.github.io/main/EO-Logo.png" width="800"/></div>

# Economics Observatory Visualisation Repository  

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/EconomicsObservatory/ecovisualisations/blob/main/LICENSE)
[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/economicsobservatory/ecovisualisations/blob/main/guidelines/tutorial.ipynb)

[**Website**](https://www.economicsobservatory.com/)
| [**Visualisations**](https://github.com/EconomicsObservatory/ecovisualisations)
| [**Data**](https://github.com/EconomicsObservatory/ecodatahub)
|

Here you will find all the data visualisations and infographics attached to our articles published on the Observatory website. Each visualisation is published under an open source [MIT licence](LICENSE), and you are free to reuse/reproduce/redistribute, with attribution.

### Structure

Under **[articles](/articles)** each visualisation has their own folder, and within that folder you will find separate subfolder for the **data** (in `csv` format) , the **visualisation** (in `json`), and in some cases accompanying `HTML`, `CSS` and `JavaScript`. The naming convention for articles is `yyyy-mm-dd-permalink`.

Each figure in the article is typically a separate visualisation and has their own (usually [Vega-lite](https://vega.github.io/vega-lite/) or [Vega](http://vega.github.io/), but sometimes a [D3plus](http://d3plus.org/) or [eCharts](https://echarts.apache.org/)) `json` specification. We normalize the data and compile the visualisations using the **`parser.ipynb`** [Jupyter](https://jupyter.org/) notebook.

- `raw` contains the original data, as we have received it from the author (depending on the circumstances, this might not always be public)
- `data` contains the normalised data and it is typically the output of the `parser`.ipynb
- `visualisation` contains a `json` file for each visualisation (typically one for each figure in the article), as well as an automatically generated `HTML` file for direct embedding.

### Embedding

Furthermore, we maintain a [`viewer.html`](/viewer.html) that can take a data source parameters as its URL hash. E.g. visiting [`https://economicsobservatory.github.io/ECOvisualisations/viewer.html#`**`articles/2021-04-14-a-year-in-the-uk-labour-market-whats-happened-over-the-coronavirus-pandemic/visualisation/fig5_absent_from_work`**](https://economicsobservatory.github.io/ECOvisualisations/viewer.html#articles/2021-04-14-a-year-in-the-uk-labour-market-whats-happened-over-the-coronavirus-pandemic/visualisation/fig5_absent_from_work) will open the viewer for Figure 5 of [this](https://www.economicsobservatory.com/a-year-in-the-uk-labour-market-whats-happened-over-the-coronavirus-pandemic) article. **This is the recommended way** for embedding our visualisations on other sites.

## 🌌 Visualisations

We try to follow industry best-practices in data visualisation and try to establish our very own visualisation guidelines for all chart types. You can read about these, as well as the tools we use in **[📐visualisation guidelines](/guidelines)** .  

Date | Article | Repository | Code
--- | --- | --- | ---
2021.04.19 | [How should governments source public services during a crisis?](https://www.economicsobservatory.com/how-should-governments-source-public-services-during-a-crisis) | [folder](/articles/2021-04-19-how-should-governments-source-public-services-during-a-crisis) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/economicsobservatory/ecovisualisations/blob/main/articles/2021-04-19-how-should-governments-source-public-services-during-a-crisis/parser.ipynb)
2021.04.14 | [A year in the UK labour market: what’s happened over the coronavirus pandemic?](https://www.economicsobservatory.com/a-year-in-the-uk-labour-market-whats-happened-over-the-coronavirus-pandemic) | [folder](/articles/2021-04-14-a-year-in-the-uk-labour-market-whats-happened-over-the-coronavirus-pandemic) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/economicsobservatory/ecovisualisations/blob/main/articles/2021-04-14-a-year-in-the-uk-labour-market-whats-happened-over-the-coronavirus-pandemic/parser.ipynb)
2021.04.09 | [How are economic models adapting to rising inequality and the pandemic?](https://www.economicsobservatory.com/how-are-economic-models-adapting-to-rising-inequality-and-the-pandemic) | [folder](/articles/2021-04-09-how-are-economic-models-adapting-to-rising-inequality-and-the-pandemic) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/economicsobservatory/ecovisualisations/blob/main/articles/2021-04-09-how-are-economic-models-adapting-to-rising-inequality-and-the-pandemic/parser.ipynb)

## 📊 Data

All of our chart data are published under their respective article subfolders, but on top of that we also operate the **[ECOdataHUB](https://github.com/EconomicsObservatory/ecodatahub)**, where you will find a trove of data used in our articles and analyses, as well as interactive visualisation exploration interfaces. Whenever possible, we try to follow a [TIDY](http://vita.had.co.nz/papers/tidy-data.pdf) format. You can read about our data zen in [**📐data guidelines**](https://github.com/EconomicsObservatory/ECOdataHUB/tree/main/guidelines).  

## 💻 Build

To learn about the technologies used or build a similar charts like this you can follow the instructions on the [guidelines](/guidelines) page. If you discovered any bugs or have any specific suggestions or feature requests please use the [Issues](https://github.com/EconomicsObservatory/ecovisualisations/issues) page.

## 📧 Contact

The Economics Observatory is run out of the [University of Bristol](https://www.bristol.ac.uk/) and you can read more **[about us here](https://www.economicsobservatory.com/about)**. For any technical or visualization-related questions you may contact [Dénes](mailto:d.csala@lancaster.ac.uk). For economics-related queries and anything else about the site content, or further collaborations, you may contact [Charlie](mailto:charlie.meyrick@bristol.ac.uk).

## 📰 Reference

If you would like to use the site as an information source or any of the visualizations or the data presented, you are free to do so under an [MIT licence](LICENSE) (you're free to modify anything, as long you as you mention us). Furthermore, the content of all of our articles presented on the [Economics Observatory website](https://www.economicsobservatory.com/about) is shareable under a [Creative Commons ShareAlike 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.  

If you would like to refer to it in publications or other scientific works of any kind, please use the following style:
 - `Title of article or chart`, Economics Observatory, 2021, `link to article or chart`, published on: `publication date`, accessed on: `access date`
