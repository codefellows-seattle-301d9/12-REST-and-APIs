(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    /* DONE-Corey: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/codefellows-seattle-301d9/repos' +
           '?per_page=10' +
           '&sort=update',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + token,
      },
      success: function(data, message, xhr) {
        console.log(data);
        data.forEach(function(obj) {
          reposObj.allRepos.push(obj);
        });
      }
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  reposObj.requestRepos();

  module.reposObj = reposObj;
})(window);
