(function(module) {
  var repoView = {};
  /* TODO: DONE Derek Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  var repoCompiler = Handlebars.compile($('#repo-template').text());  // Finish the Handlebars method here!

  repoView.renderRepos = function() {
    $('#about ul').empty().append(reposObj.withTheAttribute('name').map(repoCompiler)); //TODO: experiment changing this (the 'name' in .withTheAttribute('name') ) attribute!
  };
/* TODO: DONE Derek Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */
  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
