module.exports = function(eleventyConfig) {
	// Return your Object options:
	return {
	templateFormats: ["html", "markdown", "njk"],
	markdownTemplateEngine: "njk",
	  dir: {
		input: "_src",
		output: "_site",
		includes: "includes",
		data: "data"
	  }
	}
  };