(function (cloudStack) {
  cloudStack.plugins.storageMonitorHA = function(plugin) {
    plugin.ui.addSection({
      id: 'storageMonitorHA',
      title: 'Storage Monitor HA',
      showOnNavigation: true,
      preFilter: function(args) {
        return isAdmin();
      },
      show: function() {
        return $('<div>').html('Content will go here');
      }
    });
  };
}(cloudStack));
