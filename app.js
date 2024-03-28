const heading = React.createElement(
  "h1",
  { id: "header", xyz: "abc" },
  "this is my first react app"
);
console.log(heading);
/**
 * heading is nothing but a object
 * OUTPUT :-
 * {
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "header",
        "xyz": "abc",
        "children": "this is my first react app"
    },
    "_owner": null,
    "_store": {}
}
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * this is use to make the root
 * root is nothing but the target in out react app
 */
root.render(heading);
/**
 * this render methid is responsible of converting the heading object to html and indert that into root
 * render method is replaced whatever inside the root tag not appended it will replace
 */

/**
 * what if i want to render below html in react app using React.createElement
 * <div id='parent'>
     <div id='child1'>
        <h1 id='heading1'>this is my heading 1</h1>
         <h2 id='heading2'></h2>
    </div>
     <div id='child2'>
     <h1 id='heading3'></h1>
         <h2 id='heading4'></h2>
    </div>
 * </div>

    ReactElement(Object) => HTML(Browser Understands)
 */

const body = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "this is my heading 1"),
    React.createElement("h2", { id: "heading2" }, "this is my heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", { id: "heading3" }, "this is my heading 3"),
    React.createElement("h4", { id: "heading4" }, "this is my heading 4"),
  ]),
]);

root.render(body)

/**
 * React is nothing but a library because it will impact on the protion which we are targeting
 * let say we have root folder which we are targeting so react is always target that small portion.
 * thats why we can inject react in existing framework since it will impact small portion.
 */
