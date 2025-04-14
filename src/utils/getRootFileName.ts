/**
 * Gets the root file name from a given file path. i.e. if the file path is "/home/user/file.txt", it returns "file.txt".
 * @param filePath - The file path from which to extract the root file name.
 * @returns 
 */
export const getRootFileName = (filePath: string): string => {
    // Split the file path by "/" and get the last part
    const parts = filePath.split("/");

    if (parts.length === 0) {
        return filePath;
    }

    // If the file path ends with "/", remove the last part
    const rootFileName = parts[parts.length - 1];

    // If the root file name is empty, return the original file path
    if (rootFileName === "") {
        return filePath;
    }

    return rootFileName;
}