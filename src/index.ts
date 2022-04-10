import { ReadFilteredListAPI, ReadFilteredPageAPI, ReadListAPI, ReadPageAPI } from '@crudifyjs/api';
import { Ref } from '@vue/composition-api';
import { useFilteredListApi, useFilteredPageApi, useListApi, usePageApi } from 'vue-use-read-api';

export function useReadListApi<T>(readListApi: ReadListAPI<T>) {
    return useListApi<T>(() => readListApi.readList());
}

export function useReadFilteredListApi<T, F>(
    readListApi: ReadFilteredListAPI<T, F>,
    filterRef: Ref<F | undefined>,
    debounceMs?: number,
) {
    return useFilteredListApi<T, F>(
        filter => readListApi.readFilteredList(filter),
        filterRef,
        debounceMs,
    );
}

export function useReadPageApi<T, R extends number[] = number[]>(
    readPageApi: ReadPageAPI<T>,
    debounceMs?: number,
) {
    return usePageApi<T, R>(
        pagination => readPageApi.readPage(pagination),
        debounceMs,
    );
}

export function useReadFilteredPageApi<T, F, R extends number[] = number[]>(
    readPageApi: ReadFilteredPageAPI<T, F>,
    filterRef: Ref<F | undefined>,
    debounceMs?: number,
) {
    return useFilteredPageApi<T, F, R>(
        (filter, pagination) => readPageApi.readFilteredPage(filter, pagination),
        filterRef,
        debounceMs,
    );
}
