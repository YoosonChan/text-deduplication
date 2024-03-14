# Text Deduplication

## The problem of installation at the Windows system

### The **[problem](https://stackoverflow.com/questions/57879150/how-can-i-solve-error-gypgyp-errerr-find-vsfind-vs-msvs-version-not-set-from-c)** of `gyp ERR! find VS`

> You need to install the latest version of Visual Studio including the "Desktop development with C++" workload. For more information consult the [documentation](https://github.com/nodejs/node-gyp#on-windows).

Use the `Visual Studio Installer` to get the `Desktop development with C++` workload in one of the [Visual Studio](https://visualstudio.microsoft.com/vs/older-downloads/) versions you have installed in your machine:

![VS workloads](https://i.stack.imgur.com/S3RgX.png)

#### The **[problem](https://stackoverflow.com/questions/46225835/node-gyp-msbuild-exe-failed-with-exit-code-1)** of `gyp ERR! stack Error: ...\MSBuild.exe failed with exit code: 1`

```sh
npm install --global windows-build-tools
```

#### The problem of `Downloading python-2.7.15.amd64.msi`

> [python-2.7.15.amd64.msi](https://www.python.org/downloads/release/python-2715/)
