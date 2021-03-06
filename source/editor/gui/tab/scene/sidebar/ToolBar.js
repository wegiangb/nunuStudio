"use strict";

function ToolBar(parent, size, position)
{
	var self = this;

	this.editor = parent;

	//Text
	var text = new Text(parent);
	text.setText("Tools");
	text.size.set(40, 20);
	text.position.set(0, position);
	text.updateInterface();
	position += text.size.y;

	//Select
	this.select = new ButtonImageToggle(parent);
	this.select.setSelected(true);
	this.select.setImage(Editor.FILE_PATH + "icons/tools/select.png");
	this.select.size.set(size, size);
	this.select.position.set(0, position);
	this.select.setAltText("Select (CTRL+1)");
	this.select.updateInterface();
	this.select.setOnClick(function()
	{
		self.selectTool(Editor.SELECT);
	});
	position += size;

	//Move
	this.move = new ButtonImageToggle(parent);
	this.move.setImage(Editor.FILE_PATH + "icons/tools/move.png");
	this.move.size.set(size, size);
	this.move.position.set(0, position);
	this.move.setAltText("Move (CTRL+2)");
	this.move.updateInterface();
	this.move.setOnClick(function()
	{
		self.selectTool(Editor.MOVE);
	});
	position += size;

	//Resize
	this.scale = new ButtonImageToggle(parent);
	this.scale.setImage(Editor.FILE_PATH + "icons/tools/resize.png");
	this.scale.size.set(size, size);
	this.scale.position.set(0, position);
	this.scale.setAltText("Scale (CTRL+3)");
	this.scale.updateInterface();
	this.scale.setOnClick(function()
	{
		self.selectTool(Editor.SCALE);
	});
	position += size;

	//Rotate
	this.rotate = new ButtonImageToggle(parent);
	this.rotate.setImage(Editor.FILE_PATH + "icons/tools/rotate.png");
	this.rotate.size.set(size, size);
	this.rotate.position.set(0, position);
	this.rotate.setAltText("Rotate (CTRL+4)");
	this.rotate.updateInterface();
	this.rotate.setOnClick(function()
	{
		self.selectTool(Editor.ROTATE);
	});
	position += size;
}

ToolBar.prototype.destroy = function()
{
	this.text.destroy();
	this.select.destroy();
	this.move.destroy();
	this.scale.destroy();
	this.rotate.destroy();
};

//Select object manipulation tool
ToolBar.prototype.selectTool = function(tool)
{
	this.select.setSelected(tool === Editor.SELECT);
	this.move.setSelected(tool === Editor.MOVE);
	this.scale.setSelected(tool === Editor.SCALE);
	this.rotate.setSelected(tool === Editor.ROTATE);

	this.editor.selectTool(tool);
};
