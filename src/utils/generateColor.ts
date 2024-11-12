export function generateRandomColor() {
    const colors = [
        "rgba(255, 204, 153, 1)",
        "rgba(153, 255, 153, 1)",
        "rgba(204, 204, 255, 1)",
        "rgba(255, 182, 193, 1)",
        "rgba(255, 255, 153, 1)",
        "rgba(204, 255, 204, 1)",
        "rgba(204, 153, 255, 1)",
        "rgba(255, 228, 225, 1)",
        "rgba(204, 255, 255, 1)",
        "rgba(255, 250, 205, 1)" 
    ];

    const randomInt: number = Math.round(Math.random() * 10);
    return colors[randomInt]
}