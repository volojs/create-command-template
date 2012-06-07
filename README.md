## Summary
This is a sample [volo](https://github.com/volojs/volo) command that can
be published to npm and used by volofiles if the project's volofile
does an npm install of this package in its local `node_modules` folder.

## Testing

Create a symlink at test/node_modules/{NAME} that points to this directory.
Then:

    cd test
    volo {NAME}

That will run the test volofile at `test/volofile`.
