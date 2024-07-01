# example R options set globally
options(width = 80)

# example chunk options set globally
knitr::opts_chunk$set(
  comment = "#>",
  collapse = TRUE,
  message = FALSE,
  warning = FALSE
  )
knitr::opts_knit$set(root.dir = rprojroot::find_rstudio_root_file())
setwd(here::here())

