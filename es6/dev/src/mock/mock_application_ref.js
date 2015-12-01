import { ApplicationRef } from 'angular2/src/core/application_ref';
export class MockApplicationRef extends ApplicationRef {
    registerBootstrapListener(listener) { }
    registerDisposeListener(dispose) { }
    bootstrap(componentType, bindings) {
        return null;
    }
    get injector() { return null; }
    ;
    get zone() { return null; }
    ;
    dispose() { }
    tick() { }
    get componentTypes() { return null; }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja19hcHBsaWNhdGlvbl9yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvbW9jay9tb2NrX2FwcGxpY2F0aW9uX3JlZi50cyJdLCJuYW1lcyI6WyJNb2NrQXBwbGljYXRpb25SZWYiLCJNb2NrQXBwbGljYXRpb25SZWYucmVnaXN0ZXJCb290c3RyYXBMaXN0ZW5lciIsIk1vY2tBcHBsaWNhdGlvblJlZi5yZWdpc3RlckRpc3Bvc2VMaXN0ZW5lciIsIk1vY2tBcHBsaWNhdGlvblJlZi5ib290c3RyYXAiLCJNb2NrQXBwbGljYXRpb25SZWYuaW5qZWN0b3IiLCJNb2NrQXBwbGljYXRpb25SZWYuem9uZSIsIk1vY2tBcHBsaWNhdGlvblJlZi5kaXNwb3NlIiwiTW9ja0FwcGxpY2F0aW9uUmVmLnRpY2siLCJNb2NrQXBwbGljYXRpb25SZWYuY29tcG9uZW50VHlwZXMiXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUNBQW1DO0FBT2hFLHdDQUF3QyxjQUFjO0lBQ3BEQSx5QkFBeUJBLENBQUNBLFFBQXFDQSxJQUFTQyxDQUFDQTtJQUV6RUQsdUJBQXVCQSxDQUFDQSxPQUFtQkEsSUFBU0UsQ0FBQ0E7SUFFckRGLFNBQVNBLENBQUNBLGFBQW1CQSxFQUFFQSxRQUF5Q0E7UUFDdEVHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO0lBQ2RBLENBQUNBO0lBRURILElBQUlBLFFBQVFBLEtBQWVJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBOztJQUV6Q0osSUFBSUEsSUFBSUEsS0FBYUssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7O0lBRW5DTCxPQUFPQSxLQUFVTSxDQUFDQTtJQUVsQk4sSUFBSUEsS0FBVU8sQ0FBQ0E7SUFFZlAsSUFBSUEsY0FBY0EsS0FBYVEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7O0FBQy9DUixDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBsaWNhdGlvblJlZn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvYXBwbGljYXRpb25fcmVmJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7Q29tcG9uZW50UmVmfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZHluYW1pY19jb21wb25lbnRfbG9hZGVyJztcbmltcG9ydCB7UHJvdmlkZXIsIEluamVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge05nWm9uZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvem9uZS9uZ196b25lJztcbmltcG9ydCB7UHJvbWlzZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQXBwbGljYXRpb25SZWYgZXh0ZW5kcyBBcHBsaWNhdGlvblJlZiB7XG4gIHJlZ2lzdGVyQm9vdHN0cmFwTGlzdGVuZXIobGlzdGVuZXI6IChyZWY6IENvbXBvbmVudFJlZikgPT4gdm9pZCk6IHZvaWQge31cblxuICByZWdpc3RlckRpc3Bvc2VMaXN0ZW5lcihkaXNwb3NlOiAoKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIGJvb3RzdHJhcChjb21wb25lbnRUeXBlOiBUeXBlLCBiaW5kaW5ncz86IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPik6IFByb21pc2U8Q29tcG9uZW50UmVmPiB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgaW5qZWN0b3IoKTogSW5qZWN0b3IgeyByZXR1cm4gbnVsbDsgfTtcblxuICBnZXQgem9uZSgpOiBOZ1pvbmUgeyByZXR1cm4gbnVsbDsgfTtcblxuICBkaXNwb3NlKCk6IHZvaWQge31cblxuICB0aWNrKCk6IHZvaWQge31cblxuICBnZXQgY29tcG9uZW50VHlwZXMoKTogVHlwZVtdIHsgcmV0dXJuIG51bGw7IH07XG59Il19