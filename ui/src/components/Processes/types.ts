import { Job, JobStatus, Process } from '../../types';

export type EnrichedProcess = Process & { jobs: Job[]; status: JobStatus }
