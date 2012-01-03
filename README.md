This is a [volo](https://github.com/volojs/volo) command, which can be installed
via [volo acquire](https://github.com/volojs/volo/blob/master/volo/acquire/doc.md).

To test this command while developing:

    volo.js acquire symlink:/absolute/path/to/this/directory

That will install the command as a symlink inside the **volo** directory which
is a sibling to volo.js and it will allow you to test out your command more
easily while keeping the command source in a more convenient location.