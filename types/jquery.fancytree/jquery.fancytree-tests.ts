$("#tree").fancytree(<Fancytree.FancytreeOptions>{
	source: [
		{ title: "Node 1", key: "1" },
		{
			title: "Folder 2", key: "2", folder: true, children: [
				{ title: "Node 2.1", key: "3" },
				{ title: "Node 2.2", key: "4" },
				{
					foo: "bar",
					baz: 17,
					children: [
						{ title: "Node 1", key: "1" },
						{
							title: "Folder 2", key: "2", folder: true, children: [
								{ title: "Node 2.1", key: "3" },
								{ title: "Node 2.2", key: "4" },
								{ title: "NOde 2.3", key: "5", icon: "./icon.svg", checkbox: "radio" }
							]
						}
					]
				}
			]
		}
	],
	extensions: ['dnd5', 'glyph'],
	dnd5: {
		dragDrag: (node, data) => { }
	},
	icon: (event, data) => {
		const type = event.type;
		switch (data.node.title) {
			case "awesomeness":
				return { html: '<i class="fa fa-book fa-fw"></i> ' };
			default:
				return { html: '<svg><use...' };
		}
		// (Optional dynamic icon definition...)
	},
	edit: {
		close: function (event, data) {
			if (data.save && data.isNew) {
				// Quick-enter: add new nodes until we hit [enter] on an empty title
				$("#tree").trigger("nodeCommand", { cmd: "addSibling" });
			}
		}
	},
	glyph: {
		// The preset defines defaults for all supported icon types.
		// It also defines a common class name that is prepended (in this case 'fa ')
		preset: "awesome4",
		map: {
			// Override distinct default icons here
			folder: "fa-folder",
			folderOpen: "fa-folder-open"
		}
	},
	click: (ev: JQueryEventObject, node: Fancytree.EventData) => {
		return true;
	},
	checkbox: "radio",//boolean or "radio"
	expand: () => {
		console.log("expanded");
	},
	activate: function (event, data) {
		// A node was activated: display its title:
		var node = data.node;
		console.log(node.title);
	},
	beforeSelect: function (event, data) {
		// A node is about to be selected: prevent this for folders:
		if (data.node.isFolder()) {
			return false;
		}
	},
	unselectable: function (event, data) {
		return true;
	},
	unselectableIgnore: false,
	unselectableStatus: function (event, data) {
		return false;
	}
});

//$("#tree").fancytree();

var tree: Fancytree.Fancytree = $("#tree").fancytree("getTree");

var activeNode: Fancytree.FancytreeNode = tree.getRootNode();

// Sort children of active node:
activeNode.sortChildren();

// Expand all tree nodes
tree.visit(function (node) {
	node.setExpanded(true);
});

// Append a new child node
activeNode.addChildren({
	title: "Document using a custom icon",
	icon: "customdoc1.gif"
});

tree.loadKeyPath("/1/2", function (node, status) {
	if (status === "loaded") {
		console.log("loaded intermiediate node " + node);
	} else if (status === "ok") {
		node.setActive();
	}
});

var node = $.ui.fancytree.getNode($("#tree"));
alert($.ui.fancytree.version);
var f = $.ui.fancytree.debounce(50, (a: number) => { console.log(a); }, true);
f(2);

node = tree.getFirstChild();
node.setExpanded().done(function () {
	alert("expand animation has finished");
});

// Get or set an option
var autoScroll = $("#tree").fancytree("option", "autoScroll");
$("#tree").fancytree("option", "autoCollapse", true);
// Disable the tree
$("#tree").fancytree("disable");
// Get the Fancytree instance for a tree widget
$("#tree").fancytree("enable");
alert("We have " + tree.count() + " nodes.");

// Use the API
node.setTitle("New title");

// add/remove/toggle class
activeNode.addClass("test-class");
activeNode.removeClass("test-class");
activeNode.toggleClass("test-class");
activeNode.toggleClass("test-class", true);

// Fancytree.findAll()
var nodes: Fancytree.FancytreeNode[];
nodes = tree.findAll((node) => {
	return true;
});
nodes = tree.findAll("Node");

node.addChildren({
	title: "New Node",
	key: "15",
	type: "book",
	iconTooltip: "Icon toolip",
	statusNodeType: "loading",
	unselectableIgnore: true,
	unselectableStatus: false,
}, 0);

$("#tree").fancytree().generateFormElements();
$("form").submit((elem) => {
	// Render hidden <input> elements for active and selected nodes.
	$("#tree").fancytree("getTree").generateFormElements();
	alert("POST data:\r\n" + jQuery.param($(elem).serializeArray()));
	// return false to prevent submission
	return false;
});
