var PlayerBuildingsView = Backbone.View.extend({
	tagName: 'div',
	
	initialize: function(){
		this.render();
		this.listenTo(this.collection, 'add', this.render);
	},
	
	render: function(){
		this.$el.children().detach();
		$('.buy').empty();
    // this.$el.html('<span>Player Buildings View Test</span>').append(
      $('.buy').append(
		  this.collection.map(function(building){
		  	return new PlayerBuildingsEntryView({model: building}).render();
		  })
		);
	}
});