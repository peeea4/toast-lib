import { ToastService } from "@/components/ToastProvider";

export const useToast = () => {
    const configurable = (options) => {
        ToastService.addToast(options);
    };

    const info = (title) => {
        ToastService.addToast({ type: "info", title: title, duration: 3000 });
    };

    const success = (title) => {
        ToastService.addToast({
            type: "success",
            title: title,
            duration: 3000,
        });
    };

    const error = (title) => {
        ToastService.addToast({ type: "error", title: title, duration: 3000 });
    };

    const warning = (title) => {
        ToastService.addToast({
            type: "warning",
            title: title,
            duration: 3000,
        });
    };

    return { configurable, info, success, error, warning };
};
