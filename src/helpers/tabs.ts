import {
  InstanceOptions,
  TabItem,
  Tabs,
  TabsInterface,
  TabsOptions,
} from "flowbite";

class TabsOption {
  private tab: HTMLElement;
  private tabElement!: TabItem[];
  private tabOptions?: TabsOptions;
  private instanceOptions?: InstanceOptions;
  private tabsInterface?: TabsInterface;

  constructor(tab: HTMLElement) {
    this.tab = tab;
  }

  public setTab(tab: TabItem[]) {
    this.tabElement = tab;
    return this;
  }

  public setTabOptions(tabOptions?: TabsOptions) {
    if (!tabOptions) {
      this.tabOptions = {
        defaultTabId: this.tabElement[0].id,
        activeClasses: "border-b border-primary text-primary",
        inactiveClasses: "hover:border-b hover:border-primary hover:text-primary",
      };
    } else {
      this.tabOptions = tabOptions;
    }
    return this;
  }

  public setInstanceOptions(instanceOptions?: InstanceOptions) {
    if (!instanceOptions) {
      this.instanceOptions = {
        id: this.tab.id,
        override: true,
      };
    } else {
      this.instanceOptions = instanceOptions;
    }
    return this;
  }

  public init() {
    this.tabsInterface = new Tabs(
      this.tab,
      this.tabElement,
      this.tabOptions,
      this.instanceOptions
    );
    this.tabsInterface.init();
  }
}

export default TabsOption;