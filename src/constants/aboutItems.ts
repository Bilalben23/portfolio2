type AboutItem = {
    label: string;
    number: number
}

export const aboutItems: AboutItem[] = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of experience',
        number: 3
    }
] as const;
