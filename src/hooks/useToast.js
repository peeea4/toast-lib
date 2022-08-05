import { ToastService } from "@/components/ToastProvider";

export const useToast = () => {
    const toast = (options) => {
        ToastService.addToast(options);
    };

    return { toast };
};
