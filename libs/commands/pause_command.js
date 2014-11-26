'use strict';

module.exports = function(musicController, cmd) {
    return {
        run: function(request) {
            if (request.via == "dm") {
                musicController.pause();
                console.log("DM: pause");
            }
        }
    };
};
