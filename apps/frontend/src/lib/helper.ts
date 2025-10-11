import { DEFAULT_PAGE_SIZE } from "@/constants";

export function transformationSkip({page, pageSize}: {page?: number, pageSize?: number}) {
    return {
        skip: ((page??1) - 1) * (pageSize??DEFAULT_PAGE_SIZE),
        take: pageSize??DEFAULT_PAGE_SIZE,
    }
}

export function calculatePageNumbers({pageNeighbors, currentPage, totalPages}:{pageNeighbors: number, currentPage: number, totalPages: number}) {
    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlock = totalNumbers + 2;

    if (totalPages > totalBlock) {
        const startPage = Math.max(1, currentPage - pageNeighbors);
        const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);

        let pages: (string | number)[] = Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);

        if (startPage > 1) pages = ['...', ...pages];
        if (endPage < totalPages - 1) pages = [...pages, '...'];
        
        return pages;
    };

    return Array.from({length: totalPages},(_,i) => i + 1);


}