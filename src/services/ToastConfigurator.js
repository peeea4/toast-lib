export class ToastConfigurator {
    constructor() {
        this.toasts = [];
        this.toastRef = { onAddToast: () => {}, onRemoveToast: () => {} };
    }

    init = (ref) => {
        this.toastRef = ref;
    };

    addToast = (args) => {
        const toastId = Math.random().toString(36).substring(2, 9);
        const toast = { toastId, ...args };
        this.toasts.push(toast);
        this.toastRef.onAdd(toast);
    };

    removeToast = (id) => {
        this.toasts = this.toasts.filter((toast) => toast.id !== id);
        this.toastRef.onRemove(id);
    };

    getToasts = () => {
        return this.toasts;
    };
}
