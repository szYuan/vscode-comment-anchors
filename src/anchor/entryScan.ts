import { TreeItem, TreeItemCollapsibleState } from "vscode";
import EntryBase from "./entryBase";
import { AnchorEngine } from "../anchorEngine";

/**
 * Represents a pending workspace scan
 */
export default class EntryScan extends EntryBase {
  constructor(engine: AnchorEngine) {
    super(engine, "点击开始查找", TreeItemCollapsibleState.None);

    this.iconPath = {
      light: this.loadResourceSvg("launch"),
      dark: this.loadResourceSvg("launch"),
    };

    this.command = {
      title: "Initiate scan",
      command: "commentAnchors.launchWorkspaceScan",
    };
  }

  tooltip = this.label!;

  toString(): string {
    return "EntryLaunch{}";
  }

  contextValue = "launch";
}
