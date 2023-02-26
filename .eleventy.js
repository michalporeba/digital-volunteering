module.exports = function (eleventyConfig) { 
    const govukEleventyPlugin = require('govuk-eleventy-plugin');

    eleventyConfig.addPlugin(govukEleventyPlugin, {
        brandColour: "#fbb900",
        header: {
            organisationLogo: "royal-arms",
            organisationName: "Digital Volunteering"
        },
        footer: {
            copyright: {
                text: "Copy Left"
            }
        }
    });

    return {
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        dir: {
            output: "public",
            layouts: "node_modules/govuk-eleventy-plugin/layouts"
        },
    };
};