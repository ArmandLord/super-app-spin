import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { AxiosResponse } from "axios";
import useMovements from "./useMovements"; 
import { MovementsSection,MovementsResponse } from "../models/MovementsResponse"; 

jest.mock("axios");

describe("useMovements", () => {
  it("fetches movements and updates state correctly", async () => {
    const responseData: MovementsSection[] = [
      { id: 1, amount: 100 },
      { id: 2, amount: 200 },
    ];
    const mockResponse: AxiosResponse<MovementsResponse> = {
      data: responseData,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    axios.create.mockReturnValue({
      get: jest.fn().mockResolvedValue(mockResponse),
    });

    const TestComponent = () => {
      const { movements, loading, moreData, getMovements } = useMovements(
        "history"
      );

      return (
        <div>
          <button onClick={getMovements}>Fetch Movements</button>
          {loading ? (
            <span data-testid="loading">Loading...</span>
          ) : (
            <div>
              <span data-testid="movement-count">{movements.length}</span>
              {movements.map((movement) => (
                <div key={movement.id} data-testid={`movement-${movement.id}`}>
                  Amount: {movement.amount}
                </div>
              ))}
              {moreData ? null : (
                <span data-testid="no-more-data">No more data</span>
              )}
            </div>
          )}
        </div>
      );
    };

    render(<TestComponent />);

    const fetchButton = screen.getByText("Fetch Movements");
    fetchButton.click();

    await waitFor(() => {
      const movementCount = screen.getByTestId("movement-count");
      const firstMovement = screen.getByTestId("movement-1");
      const secondMovement = screen.getByTestId("movement-2");
      const noMoreData = screen.queryByTestId("no-more-data");

      expect(movementCount).toBeInTheDocument();
      expect(movementCount.textContent).toBe("2");

      expect(firstMovement).toBeInTheDocument();
      expect(firstMovement.textContent).toBe("Amount: 100");

      expect(secondMovement).toBeInTheDocument();
      expect(secondMovement.textContent).toBe("Amount: 200");

      expect(noMoreData).not.toBeInTheDocument();
    });
  });
});
