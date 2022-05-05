import { httpService } from '@core/service';
import { Method } from 'axios';
import { useEffect, useState } from 'react';

export const useData = <T>(
	method: Method,
	action: string,
	query?: string | undefined,
	postData?: any,
	deps: any[] = []
) => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		const getData = async(): Promise<void> => {
			setIsLoading(true);
			try {
				const res = await httpService<T>(method, action, query, postData);
				setData(res.data);
				setIsError(false);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, deps);

	return { isLoading, isError, data };
};

export default useData;
