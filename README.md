This is a [volo](https://github.com/volojs/volo) command, which can be installed
via [volo acquire](https://github.com/volojs/volo/blob/master/volo/acquire/doc.md).

To test this command while developing:

1) In a **volo** directory that is a sibling to volo.js, create a JS file that
is the same name as this project with the following contents (replace
PROJECTNAME with the name of this project)

In PROJECTNAME.js:

```javascript
    define(['PROJECTNAME/main'], function (main) {
        return main;
    });
```

2) Create a PROJECTNAME/ symlink that points to the development area for this
command.
