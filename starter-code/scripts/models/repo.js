(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(nextFunction) {
    /* TODO: DONE How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */

    $.ajax({
      url: 'https://api.github.com/users/codefellows/repos' +
           '?per_page=5' +
           '&sort=update',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + token,
      },
      success: function(data, message, xhr) {
        data.forEach(function(elem) {
          reposObj.allRepos.push(elem);
        });
        // console.log(reposObj.allRepos);
      }
    }).done(nextFunction);
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
    // console.log(reposObj.withTheAttribute('forks'));
  };

  module.reposObj = reposObj;
})(window);
