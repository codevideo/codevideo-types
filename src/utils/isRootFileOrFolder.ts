// if the file or folder name does not start with ~/ or has no / in it, it is a root file or folder
export const isRootFileOrFolder = (name: string): boolean => {
    // Check if the name starts with ~/ or has no /
    return name.startsWith("~/") || !name.includes("/")
}