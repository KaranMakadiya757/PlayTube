export const formatNumber = (value: number): string => {
    if (value < 1000) return value.toString();

    const units = ["", "K", "M", "B", "T"];
    const unitIndex = Math.floor(Math.log10(value) / 3);

    return `${Math.floor(value / Math.pow(1000, unitIndex))}${units[unitIndex]}`;
};

export const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();

    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 60) return `${seconds}s`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d`;

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks}w`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo`;

    const years = Math.floor(days / 365);
    return `${years}y`;
};

export const formatSeconds = (totalSeconds: number): string => {
    if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
        return "00:00";
    }

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    if (hours === 0) {
        return `${mm}:${ss}`;
    }

    const hh = String(hours).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
};  