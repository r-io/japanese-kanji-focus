export interface PostContactPayload {
    email: string;
    name: string;
    message: string;
    platform: string;
    device: string;
}

export interface PostContactResponse {
    success: boolean;
}