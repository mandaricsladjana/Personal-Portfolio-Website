
const detailModules = import.meta.glob(
    "./details/*.{js,jsx}",
    {
        eager: true,
        import: "default",
    }
);

export const projectDetails = Object.fromEntries(
    Object.values(detailModules)
        .filter((detail) => detail && detail.id)
        .map((detail) => [
            detail.id,
            detail,
        ])
);
