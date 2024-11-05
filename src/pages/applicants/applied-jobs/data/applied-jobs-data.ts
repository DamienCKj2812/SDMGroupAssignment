export interface IAppliedJob {
    id: number;
    jobId: number;
    status: "Waiting for response" | "Rejected" | "Approved";
    dateApplied: number; // Unix timestamp
    lastUpdate: number;
}

export const appliedJobs: IAppliedJob[] = [
    {
        id: 1,
        jobId: 1,
        status: "Waiting for response",
        dateApplied: 1730759985,
        lastUpdate: 1730846385,
    },
    {
        id: 2,
        jobId: 2,
        status: "Approved",
        dateApplied: 1730650000,
        lastUpdate: 1730740000,
    },
    {
        id: 3,
        jobId: 3,
        status: "Rejected",
        dateApplied: 1730550000,
        lastUpdate: 1730640000,
    },
    {
        id: 4,
        jobId: 4,
        status: "Waiting for response",
        dateApplied: 1730450000,
        lastUpdate: 1730540000,
    },
    {
        id: 5,
        jobId: 5,
        status: "Approved",
        dateApplied: 1730350000,
        lastUpdate: 1730440000,
    },
    {
        id: 6,
        jobId: 6,
        status: "Rejected",
        dateApplied: 1730250000,
        lastUpdate: 1730340000,
    },
    {
        id: 7,
        jobId: 7,
        status: "Waiting for response",
        dateApplied: 1730150000,
        lastUpdate: 1730240000,
    },
    {
        id: 8,
        jobId: 8,
        status: "Approved",
        dateApplied: 1730050000,
        lastUpdate: 1730140000,
    },
    {
        id: 9,
        jobId: 9,
        status: "Rejected",
        dateApplied: 1729950000,
        lastUpdate: 1730040000,
    },
    {
        id: 10,
        jobId: 10,
        status: "Waiting for response",
        dateApplied: 1729850000,
        lastUpdate: 1729940000,
    },
    {
        id: 11,
        jobId: 11,
        status: "Approved",
        dateApplied: 1729750000,
        lastUpdate: 1729840000,
    },
];
