class LTrack {
  projectId: string;

  userId: string;

  pageProperty: {
    [key: string]: any;
  };

  setProjectId(projectId: string) {
    this.projectId = projectId;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  clearUserId() {
    this.userId = '';
  }

  setPageProperty(p1: string, p2?: any) {
    if (typeof p2 === 'undefined') {
      // 按 JSON 处理
      this.pageProperty = { ...JSON.parse(p1) };
    } else {
      // 按 key value 处理
      this.pageProperty[p1] = p2;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  track(p1: string, p2?: any) {
    if (typeof p2 === 'undefined') {
      // 按 没有 payload 处理
      console.log(p1);
    } else {
      // 按 payload 为 JSON 处理
      console.log(p1, p2);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  forcePush(handleSuccess?: Function, handleFaild?: Function) {
    // forcePush
    // 加回调函数
    console.log(handleSuccess, handleFaild);
  }

  ltk(actionName: string, ...params: any[]) {
    switch (actionName) {
      case 'init':
        this.setProjectId(params[0]);
        break;
      case 'setUserId':
        this.setUserId(params[0]);
        break;
      case 'clearUserId':
        this.clearUserId();
        break;
      case 'page.set':
        if (params.length === 1) {
          this.setPageProperty(params[0]);
        } else {
          this.setPageProperty(params[0], params[1]);
        }
        break;
      case 'track':
        this.track(params[0]);
        break;
      case 'forcePush':
        this.setUserId(params[0]);
        break;
      default:
        break;
    }
  }
}
const ltrack = new LTrack();

window.ltk = ltrack.ltk;
export default ltrack;
