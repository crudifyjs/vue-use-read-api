import { ReadFilteredListAPI, ReadFilteredPageAPI, ReadListAPI, ReadPageAPI } from '@crudifyjs/api';
import { Ref } from '@vue/composition-api';
import {
    useFilteredListApi, UseFilteredListApiOptions, useFilteredPageApi, useListApi, usePageApi, UsePageApiOptions,
} from 'vue-use-read-api';

export function useReadListApi<T>(readListApi: ReadListAPI<T>) {
    return useListApi<T>(() => readListApi.readList());
}

export function useReadFilteredListApi<T, F>(
    readListApi: ReadFilteredListAPI<T, F>,
    filterRef: Ref<F | undefined>,
    options?: UseFilteredListApiOptions,
) {
    return useFilteredListApi<T, F>(
        filter => readListApi.readFilteredList(filter),
        filterRef,
        options,
    );
}

export function useReadPageApi<T>(
    readPageApi: ReadPageAPI<T>,
    options?: UsePageApiOptions,
) {
    return usePageApi<T>(
        pagination => readPageApi.readPage(pagination),
        options,
    );
}

export function useReadFilteredPageApi<T, F>(
    readPageApi: ReadFilteredPageAPI<T, F>,
    filterRef: Ref<F | undefined>,
    options?: UsePageApiOptions,
) {
    return useFilteredPageApi<T, F>(
        (filter, pagination) => readPageApi.readFilteredPage(filter, pagination),
        filterRef,
        options,
    );
}
