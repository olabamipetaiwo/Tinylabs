module.exports ={
    css: {
        loaderOptions:{
            sass:{
                prependData:`
                  @import "@/styles/_variables.scss";
                  @import "@/styles/_mixins.scss";
                  @import "@/styles/_general.scss";
                  @import "@/styles/_utils.scss";
                `
            }
        }
    }
}