"use strict";

/**
 * LocaleEN defines text and audio for the English language.
 * 
 * @static
 * @class LocaleEN
 */
LocaleManager.register(
{
	meta:
	{
		language: "EN",
		name: "English",
		version: 1
	},

	//Actions
	delete: "Delete",
	copy: "Copy",
	paste: "Paste",
	cut: "Cut",
	duplicate: "Duplicate",
	rename: "Rename",
	renameObject: "Rename object",
	select: "Select",
	redo: "Redo",
	undo: "Undo",

	//Context menu
	computeNormals: "Compute normals",
	applyTransformation: "Apply transformation",
	sceneEditor: "Scene editor",
	objectEditor: "Object editor",
	scriptEditor: "Script editor",
	particleEditor: "Particle editor",
	recenterGeometries: "Recenter geometries",
	enable: "Enable",
	disable: "Disable",
	static: "Static",
	dynamic: "Dynamic",
	createScene: "Create scene",

	//Geometries
	box: "Box",
	sphere: "Sphere",
	cylinder: "Cylinder",
	convexHull: "ConvexHull",
	cube: "Cube",
	torus: "Torus",
	torusKnot: "Torus Knot",
	cone: "Cone",

	//Properties
	name: "Name",
	side: "Side",
	position: "Position",
	rotation: "Rotation",
	scale: "Scale",
	uuid: "UUID",
	repeat: "Repeat",
	offset: "Offset",
	center: "Center",
	wrapHor: "Wrap Hor.",
	wrapVert: "Wrap Vert.",
	clampEdge: "Clamp to Edge",
	repeatMirror: "Repeat Mirrored",
	premulAlpha: "Premul. Alpha",
	vector: "Vector",
	type: "Type",
	physics: "Physics",
	size: "Size",
	viewport: "Viewport",
	mode: "Mode",
	anchor: "Anchor",
	antialiasing: "Antialiasing",
	exposure: "Exposure",
	backend: "Back-end",
	whitepoint: "Whitepoint",
	tonemapping: "Tonemapping",
	shadows: "Shadows",
	shadowType: "Shadows type",
	shadowsAutoUpdate: "Shadow Auto Update",
	autoClear: "Auto Clear",
	autoClearColor: "Auto Clear Color",
	autoClearDepth: "Auto Clear Depth",
	autoClearStencil: "Auto Clear Stencil",
	stencil: "Stenci",
	sortObjects: "Sort objects",
	gammaFactor: "Gamma Factor",
	gammaInput: "Gamma Input",
	gammaOutput: "Gamma Output",
	precision: "Precision",
	alpha: "Alpha",
	premultipliedAlpha: "Premultiply Alpha",
	preserveDrawingBuffer: "Preserver Buffers",
	powerPreference: "Power Preference",
	logarithmicDepthBuffer: "Logaritmic Depth",
	physicallyCorrectLights: "Physically Correct Lights",

	//Values
	relative: "Relative",
	absolute: "Absolute",
	bottomRight: "Bottom-Right",
	bottomLeft: "Bottom-Left",
	topRight: "Top-Right",
	topLeft: "Top-Left",
	firstPerson: "First-Person",
	orbit: "Orbit",
	left: "Left",
	right: "Right",
	front: "Front",
	back: "Back",
	top: "Top",
	bottom: "Bottom",
	local: "Local",
	world: "World",
	highp: "High precision",
	mediump: "Medium precision",
	lowp: "Low precision",
	highPerformance: "High performance",
	lowPower: "Low power",
	default: "Default",

	//Editor
	project: "Project",
	run: "Run",
	stop: "Stop",
	new: "New",
	save: "Save",
	saveAs: "Save as",
	load: "Load",
	settings: "Settings",
	publish: "Publish",
	import: "Import",
	export: "Export",
	exit: "Exit",
	nothingToShow: "Select an object to view its properties.",
	selectAll: "Select all",
	render: "Render",
	
	//Resources
	image: "Image",
	video: "Video",
	file: "File",
	material: "Material",
	
	//Run tab
	toggleVR: "Toggle Virtual Reality",
	toggleFullscreen: "Toggle Fullscreen",

	//Messages
	projectSaved: "Project saved.",
	projectLoaded: "Project loaded",
	projectExported: "Project exported",

	//Confirm
	deleteObjects: "Delete objects?",
	loadProjectChangesLost: "All unsaved changes to the project will be lost.",
	loadProject: "Load project?",
	createProject: "Create new project?",

	//Warnings
	unsavedChangesExit: "All unsaved changes to the project will be lost. Do you really wanna exit?",
	cannotAddItself: "Cannot add object into itself.",
	cannotAddToChildren: "Cannot add object into is children.",
	nothingToRedo: "Nothing to redo!",
	nothingToUndo: "Not possible to undo any further",
	openTabToEditContent: "Open new tab to edit content or create new project",

	//Errors
	errorExportingProject: "Error exporting project",
	webglNotSupported: "WebGL is not supported or is disabled.\nnunuStudio cannot run.",
	errorLoadingFile: "Error loading file",
	errorSavingFile: "Error saving file",
	unknownFileFormat: "Unknown file format.",
	failedLoadSpine: "Failed to load Spine animation, make sure that .json and .atlas have the same name.",
	errorPaste: "Error pasting object",
	errorRunInitialize: "Error while initializing program.",
	errorRunpdate: "Error while running program.",
	errorRunRender: "Error while rendering program.",

	//Hints
	hintAntialiasing: "Antialiasing can be used to smooth jaged edges.",
	hintBackend: "Prefered redering backend API to use if available.",
	hintStencil: "Whether the drawing buffer has a stencil buffer of at least 8 bits.",
	hintSortObjects: "If true the renderer sorts the objects from back to front for rendering. Important if using multiple transparent objects.",
	hintAlpha: "Whether the canvas contains an alpha (transparency) buffer or not.",
	hintPremultipliedAlpha: "Whether the renderer will assume that colors have premultiplied alpha.",
	hintLogarithmicDepthBuffer: "Whether to use a logarithmic depth buffer. It may be neccesary to use this if dealing with huge differences in scale in a single scene.",

	//Update
	updatedRestart: "nunuStudio updated\nRestart the editor",
	alreadyUpdated: "nunuStudio already up to date.",
	updateFailed: "Failed to download update files."
});
